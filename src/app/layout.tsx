import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/themes/theme-provider';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: 'programaConNosotros',
  description: 'Desarrollado y mantenido para y por la comunidad.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={GeistSans.className}>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster closeButton position="top-center" />
        </ThemeProvider>
      </SessionProvider>
    </body>
  </html>
);

export default RootLayout;
