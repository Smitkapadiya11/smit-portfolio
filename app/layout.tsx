import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from '../components/ClientLayout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Smit Kapadiya | AI Automation Engineer',
  description: 'Python · AI/ML · Automation · Data Science — BCA Graduate turning business processes into intelligent systems. Based in Surat, India.',
  metadataBase: new URL('https://smitkapadiya.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body>
        <ClientLayout>
          <Navbar />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
