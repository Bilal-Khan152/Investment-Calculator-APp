import React from 'react';
import { calculateInvestmentResults, formatter } from '../Investment';

function Result({ inputData }) {
  const result = calculateInvestmentResults(inputData);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

  return (
    <>
      <table className="mx-auto w-full mt-3.5 max-w-4xl border-collapse shadow-lg rounded-lg overflow-hidden">
        {/* Table Header */}
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Year</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
              Investment Value
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
              Interest (Year)
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
              Total Interest
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
              Invested Capital
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {result.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearData.year} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-700">{yearData.year}</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {formatter.format(yearData.valueEndOfYear)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {formatter.format(yearData.interest)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {formatter.format(totalInterest)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {formatter.format(totalAmountInvested)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Result;