'use client';

import React, { useState } from 'react';
import { LoanCalculationParams } from '../../utils/calculations';

interface LoanFormProps {
  onCalculate: (params: LoanCalculationParams) => void;
}

export default function LoanForm({ onCalculate }: LoanFormProps) {
  const [formData, setFormData] = useState<LoanCalculationParams>({
    loanAmount: 0,
    downPayment: 0,
    interestRate: 4.35, // default interest rate
    loanTerm: 30, // default 30 years
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <div>
        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
          Loan Amount (USD)
        </label>
        <input
          type="number"
          id="loanAmount"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleInputChange}
          min="0"
          step="10000"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700">
          Down Payment (USD)
        </label>
        <input
          type="number"
          id="downPayment"
          name="downPayment"
          value={formData.downPayment}
          onChange={handleInputChange}
          min="0"
          step="10000"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
          Annual Interest Rate (%)
        </label>
        <input
          type="number"
          id="interestRate"
          name="interestRate"
          value={formData.interestRate}
          onChange={handleInputChange}
          min="0"
          max="100"
          step="0.01"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
          Loan Term (Years)
        </label>
        <select
          id="loanTerm"
          name="loanTerm"
          value={formData.loanTerm}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="5">5 Years</option>
          <option value="10">10 Years</option>
          <option value="15">15 Years</option>
          <option value="20">20 Years</option>
          <option value="25">25 Years</option>
          <option value="30">30 Years</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Calculate Loan
      </button>
    </form>
  );
}
