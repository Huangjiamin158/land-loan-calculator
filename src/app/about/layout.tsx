import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Land & Mortgage Calculator | Property Loan Tools',
  description: 'Learn about our comprehensive land loan and mortgage calculator. Features include payment calculations, amortization schedules, and property investment tools for real estate decisions.',
  keywords: 'land loan calculator, mortgage calculator, property investment, real estate calculator, loan amortization',
  openGraph: {
    title: 'About Our Land & Mortgage Calculator',
    description: 'Discover how our land loan calculator helps with property investment decisions, mortgage payments, and real estate planning.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Land Loan Calculator'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Land Loan & Mortgage Calculator',
    description: 'Professional calculator for land loans and mortgages'
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 