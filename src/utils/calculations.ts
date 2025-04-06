// 土地贷款计算器核心函数

export interface LoanCalculationParams {
  loanAmount: number;      // 贷款金额
  interestRate: number;    // 年利率
  loanTerm: number;        // 贷款期限(年)
  downPayment: number;     // 首付金额
}

export interface LoanCalculationResult {
  monthlyPayment: number;  // 月供
  totalInterest: number;   // 总利息
  totalPayment: number;    // 总还款额
  amortizationSchedule: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    remainingBalance: number;
  }>;
}

// 计算月供
export function calculateMonthlyPayment(
  loanAmount: number,
  annualInterestRate: number,
  loanTermYears: number
): number {
  const monthlyInterestRate = annualInterestRate / 12 / 100;
  const numberOfPayments = loanTermYears * 12;
  
  const monthlyPayment =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  return Number(monthlyPayment.toFixed(2));
}

// 计算贷款详情
export function calculateLoanDetails(params: LoanCalculationParams): LoanCalculationResult {
  const { loanAmount, interestRate, loanTerm, downPayment } = params;
  const actualLoanAmount = loanAmount - downPayment;
  const monthlyPayment = calculateMonthlyPayment(actualLoanAmount, interestRate, loanTerm);
  
  let remainingBalance = actualLoanAmount;
  const monthlyInterestRate = interestRate / 12 / 100;
  const amortizationSchedule = [];
  let totalInterest = 0;

  for (let month = 1; month <= loanTerm * 12; month++) {
    const interestPayment = remainingBalance * monthlyInterestRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingBalance -= principalPayment;
    totalInterest += interestPayment;

    amortizationSchedule.push({
      month,
      payment: Number(monthlyPayment.toFixed(2)),
      principal: Number(principalPayment.toFixed(2)),
      interest: Number(interestPayment.toFixed(2)),
      remainingBalance: Number(remainingBalance.toFixed(2))
    });
  }

  return {
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
    totalPayment: Number((monthlyPayment * loanTerm * 12).toFixed(2)),
    amortizationSchedule
  };
} 