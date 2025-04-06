'use client';

import React, { useState } from 'react';
import { calculateLoanDetails } from '../../utils/calculations';
import type { LoanCalculationParams, LoanCalculationResult } from '../../utils/calculations';
import LoanForm from './LoanForm';
import LoanResult from './LoanResult';

export default function Calculator() {
  const [calculationResult, setCalculationResult] = useState<LoanCalculationResult | null>(null);

  const handleCalculate = (params: LoanCalculationParams) => {
    const result = calculateLoanDetails(params);
    setCalculationResult(result);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Land Loan Calculator
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Quickly calculate your land loan monthly payments and repayment schedule
        </p>
      </div>

      <div className="mt-12">
        <LoanForm onCalculate={handleCalculate} />
        {calculationResult && <LoanResult result={calculationResult} />}
      </div>
    </div>
  );
} 