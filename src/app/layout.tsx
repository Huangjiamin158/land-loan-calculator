import './globals.css';
import type { Metadata } from 'next';

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
      </head>
      <body>{children}</body>
    </html>
  );
} 