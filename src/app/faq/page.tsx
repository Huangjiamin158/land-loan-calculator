'use client';

import React from 'react';
import Layout from '../../components/Layout/Layout';

export default function FAQ() {
  const faqs = [
    {
      question: "What is a land loan?",
      answer: "A land loan is a type of financing specifically designed for purchasing vacant land or undeveloped property. These loans can be used for various purposes, including future construction, investment, or agricultural use."
    },
    {
      question: "How accurate are the calculator results?",
      answer: "Our calculator uses industry-standard formulas to provide accurate estimates. However, actual loan terms and rates may vary depending on factors such as your credit score, location, and the specific lender's requirements."
    },
    {
      question: "What information do I need to use the calculator?",
      answer: "You'll need the following information: desired loan amount, down payment amount, annual interest rate, and preferred loan term. The more accurate these inputs are, the more precise your results will be."
    },
    {
      question: "Why do land loans typically have higher interest rates?",
      answer: "Land loans often have higher interest rates than traditional mortgages because they're considered riskier for lenders. Undeveloped land can be harder to sell and has fewer immediate uses compared to improved property."
    },
    {
      question: "What is an amortization schedule?",
      answer: "An amortization schedule is a complete table of periodic loan payments, showing the amount of principal and interest that comprise each payment until the loan is paid off at the end of its term."
    },
    {
      question: "How is the monthly payment calculated?",
      answer: "Monthly payments are calculated using the loan amount, interest rate, and term. The formula ensures that paying the same amount each month will fully amortize the loan by the end of the term."
    },
    {
      question: "Can I make extra payments to pay off my loan faster?",
      answer: "Yes, making extra payments can significantly reduce your total interest cost and loan term. However, you should check with your lender about any prepayment penalties or restrictions."
    },
    {
      question: "What factors affect land loan approval?",
      answer: "Key factors include: credit score, down payment size, intended use of the land, location and zoning of the property, and your debt-to-income ratio."
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            Frequently Asked Questions
          </h1>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-base text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-blue-700 mb-4">
              If you can't find the answer to your question, feel free to contact our support team.
            </p>
            <div className="text-blue-700">
              <p>Email: 1721372121@qq.com</p>
              <p>Phone: +86 158 2032 5487</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 