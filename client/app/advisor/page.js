"use client"
import React, { useState } from 'react';

const YourComponent = () => {
  const [expense, setExpense] = useState('');
  const [startPension, setStartPension] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [expenseGrowth, setExpenseGrowth] = useState('');

  const handleOptionClick = (value, setStateFunction) => {
    setStateFunction(value);
  };

  const handlePlanButtonClick = () => {
    
    console.log('Show Plans button clicked!');
  };

  return (
    <div className="flex h-full justify-center items-center w-[100%]">
      
      <div className="w-[35%] p-8 border-r border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-[#6A4FF7]">Calculator</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700">What's your current monthly expense?</label>
          <input
            type="number"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter your expense"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
          
          <div className="flex mt-2">
            <button
              className="border border-[#6A4FF7] px-2 py-1 rounded-md mr-2"
              onClick={() => handleOptionClick(50000, setExpense)}
            >
              50,000
            </button>
            <button
              className="border border-[#6A4FF7] px-2 py-1 rounded-md mr-2"
              onClick={() => handleOptionClick(60000, setExpense)}
            >
              60,000
            </button>
            <button
              className="border border-[#6A4FF7] px-2 py-1 rounded-md"
              onClick={() => handleOptionClick(70000, setExpense)}
            >
              70,000
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700">Start pension from?</label>
          <input
            type="number"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter start date"
            value={startPension}
            onChange={(e) => setStartPension(e.target.value)}
          />
          
          <div className="flex mt-2">
            <button
              className="border border-[#6A4FF7] px-2 py-1 rounded-md mr-2"
              onClick={() => handleOptionClick(60, setStartPension)}
            >
              60 yrs
            </button>
            <button
              className="border border-[#6A4FF7] px-2 py-1 rounded-md mr-2"
              onClick={() => handleOptionClick(70, setStartPension)}
            >
              70 yrs
            </button>
            <button
              className="border border-[#6A4FF7] px-2 py-1 rounded-md"
              onClick={() => handleOptionClick(80, setStartPension)}
            >
              80 yrs
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700">Investment amount per month?</label>
          <input
            type="number"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter investment amount"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
          />
          
          <div className="flex mt-2">
            <button
              className="border border-[#6A4FF7] px-2 py-1 rounded-md mr-2"
              onClick={() => handleOptionClick(5000, setInvestmentAmount)}
            >
              5,000
            </button>
            <button
              className="border border-[#6A4FF7] px-2 py-1 rounded-md mr-2"
              onClick={() => handleOptionClick(10000, setInvestmentAmount)}
            >
              10,000
            </button>
            <button
              className="border border-[#6A4FF7] px-2 py-1 rounded-md"
              onClick={() => handleOptionClick(15000, setInvestmentAmount)}
            >
              15,000
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700">
            Your expense can go up by?{' '}
            <span className="border border-dotted border-[#6A4FF7] px-2 py-1 rounded-md">
              <input
                type="number"
                className="border-none outline-none w-12 text-right "
                placeholder="%"
                value={expenseGrowth}
                onChange={(e) => setExpenseGrowth(e.target.value)}
              />
            </span>
          </label>
          
          <div className="flex mt-2">
            <button
              className="border border-[#6A4FF7] px-2 py-1 rounded-md mr-2"
              onClick={() => handleOptionClick(5, setExpenseGrowth)}
            >
              5%
            </button>
            <button
              className="border border-[#6A4FF7] px-2 py-1 rounded-md mr-2"
              onClick={() => handleOptionClick(7, setExpenseGrowth)}
            >
              7%
            </button>
            <button
              className="border border-[#6A4FF7] px-2 py-1 rounded-md"
              onClick={() => handleOptionClick(10, setExpenseGrowth)}
            >
              10%
            </button>
          </div>
        </div>
        
        <button
          className="bg-[#6A4FF7] text-white py-2 px-8 rounded-md  w-full"
          onClick={handlePlanButtonClick}
        >
          Show Plans
        </button>
      </div>

      
      <div className="w-[65%] p-8">
        
      </div>
    </div>
  );
};

export default YourComponent;
