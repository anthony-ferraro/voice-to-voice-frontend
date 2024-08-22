import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from './metadata';
import { ClientThemeProvider } from '../components/ClientThemeProvider';

const inter = Inter({ subsets: ["latin"] });

import dynamic from 'next/dynamic';

const ClientOnly = dynamic(() => Promise.resolve((props: { children: React.ReactNode }) => <>{props.children}</>), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ClientThemeProvider>
            {children}
          </ClientThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
