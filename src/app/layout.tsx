import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://landloan-calculator.com'),
  title: {
    default: 'Land Loan & Mortgage Calculator | Calculate Land Loan Payments',
    template: '%s | Land Loan Calculator'
  },
  description: 'Free online land loan and mortgage calculator. Calculate monthly payments, amortization schedules, and total costs for vacant land loans, property mortgages, and real estate investments.',
  keywords: ['land loan calculator', 'mortgage calculator', 'property loan calculator', 'vacant land loan', 'real estate calculator', 'land mortgage', 'land purchase calculator'],
  openGraph: {
    title: 'Land Loan & Mortgage Calculator',
    description: 'Calculate land loan payments, mortgage costs, and amortization schedules for your property investment.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Land Loan Calculator'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Land Loan & Mortgage Calculator',
    description: 'Calculate land loan payments, mortgage costs, and amortization schedules for your property investment.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://landloan-calculator.com" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9N67R9D2X8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9N67R9D2X8');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
} 