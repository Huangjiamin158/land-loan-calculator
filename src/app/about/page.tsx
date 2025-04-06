import React from 'react';
import Layout from '../../components/Layout/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            About Our Land Loan & Mortgage Calculator
          </h1>

          <div className="prose prose-lg">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                We provide comprehensive tools for calculating land loans, mortgages, and property investments. Our calculator helps you make informed decisions about real estate financing, whether you're buying vacant land, investment property, or planning future development.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Precise land loan and mortgage payment calculations</li>
                <li>Detailed property loan amortization schedules</li>
                <li>Flexible real estate loan terms and interest rates</li>
                <li>Easy-to-understand investment cost breakdowns</li>
                <li>Mobile-friendly property calculator interface</li>
                <li>Support for various land and mortgage types</li>
                <li>Real-time calculation updates</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Our Mortgage Calculator</h2>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>Enter your desired land loan or mortgage amount</li>
                <li>Specify your property down payment</li>
                <li>Input the annual interest rate for your land loan</li>
                <li>Select your preferred mortgage term</li>
                <li>Review detailed payment breakdowns and schedules</li>
                <li>Explore different loan scenarios for your property investment</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Land Loan Calculator</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Precision & Accuracy</h3>
                  <p className="text-gray-600">
                    Our mortgage calculator uses industry-standard formulas, ensuring reliable results for all types of land loans and property investments.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">User-Friendly Design</h3>
                  <p className="text-gray-600">
                    Intuitive interface makes it easy to understand your land loan options and mortgage calculations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Transparency</h3>
                  <p className="text-gray-600">
                    Detailed breakdowns help you understand every aspect of your property loan and mortgage payments.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                  <p className="text-gray-600">
                    Our real estate finance experts are ready to help with any questions about land loans and mortgages.
                  </p>
                </div>
              </div>
            </section>

            {/* Add Schema.org structured data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebApplication",
                  "name": "Land Loan & Mortgage Calculator",
                  "description": "Calculate land loan payments, mortgage costs, and amortization schedules for property investments.",
                  "applicationCategory": "FinanceApplication",
                  "operatingSystem": "Any",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                })
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
} 