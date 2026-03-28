export type SheetsDealType = 'Partnership' | 'Contract' | 'Consultation';

/** Payload must match Google Apps Script `doPost` field names. */
export type SheetsRowPayload = {
  sheet: string;
  name: string;
  phone: string;
  email: string;
  q1: string;
  q2: string;
  q3: string;
  dealType: SheetsDealType;
};

function stringifyField(value: unknown): string {
  if (value == null || value === '') return '';
  if (Array.isArray(value)) return value.filter(Boolean).join(', ');
  return String(value);
}

/** Maps wizard fields to the fixed q1–q3 columns expected by the sheet script. */
export function buildSheetsPayload(
  data: Record<string, unknown>,
  sheet: string,
  dealType: SheetsDealType
): SheetsRowPayload {
  const name = stringifyField(data.name);
  const phone = stringifyField(data.phone);
  const email = stringifyField(data.email);

  const lower = dealType.toLowerCase() as 'partnership' | 'contract' | 'consultation';

  if (lower === 'partnership') {
    return {
      sheet,
      dealType,
      name,
      phone,
      email,
      q1: stringifyField(data.partnership_idea),
      q2: stringifyField(data.partnership_offer),
      q3: stringifyField(data.timeline),
    };
  }

  if (lower === 'contract') {
    return {
      sheet,
      dealType,
      name,
      phone,
      email,
      q1: stringifyField(data.contract_needs),
      q2: stringifyField(data.contract_budget),
      q3: stringifyField(data.timeline),
    };
  }

  const consultQ1 = [stringifyField(data.consult_business_type), stringifyField(data.consult_problem)]
    .filter(Boolean)
    .join(' — ');

  return {
    sheet,
    dealType,
    name,
    phone,
    email,
    q1: consultQ1,
    q2: stringifyField(data.consult_team_size),
    q3: stringifyField(data.consult_outcome),
  };
}

export async function submitToSheets(formData: SheetsRowPayload): Promise<{ ok: boolean; error?: string }> {
  const url = process.env.NEXT_PUBLIC_SHEETS_URL?.trim();

  if (!url) {
    console.error(
      'NEXT_PUBLIC_SHEETS_URL is missing. Add it to .env.local, then restart `npm run dev` or run `npm run build` again.'
    );
    return { ok: false, error: 'Form endpoint is not configured.' };
  }

  const bodyObject = {
    sheet: formData.sheet,
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    q1: formData.q1,
    q2: formData.q2,
    q3: formData.q3,
    dealType: formData.dealType,
  };

  console.log('Form data:', bodyObject);

  const body = JSON.stringify(bodyObject);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    const responseText = await response.text();
    console.log('Response:', responseText);

    if (!response.ok) {
      return {
        ok: false,
        error: responseText?.trim() || `Request failed (${response.status})`,
      };
    }

    return { ok: true };
  } catch (firstErr) {
    console.warn(
      'Primary POST failed (often browser CORS to script.google.com). Retrying as text/plain with no-cors…',
      firstErr
    );

    try {
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body,
      });
      console.log(
        'Fallback POST sent (no-cors). Response is opaque in the browser — confirm the row in Google Sheet.'
      );
      return { ok: true };
    } catch (fallbackErr) {
      console.error('Submission failed:', fallbackErr);
      return {
        ok: false,
        error: firstErr instanceof Error ? firstErr.message : 'Network error — check console (F12).',
      };
    }
  }
}
