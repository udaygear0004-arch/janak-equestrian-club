import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Janak Equestrian Club',
  description: 'A cinematic 3D website experience for a premium equestrian club.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
