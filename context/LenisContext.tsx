'use client';

import { createContext, useContext } from 'react';

// Lenis has been removed — context kept as null for compatibility
export const LenisContext = createContext<null>(null);

export function useLenis() {
  return useContext(LenisContext);
}
