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

    const plans = [
        {
            id: 1,
            imageSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/HDFC_Life_Logo.svg/1200px-HDFC_Life_Logo.svg.png', // Replace with your actual image source URL
            years: 15,
            percentage: 8,
            monthlyPension: 7500,
        },
        {
            id: 2,
            imageSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/HDFC_Life_Logo.svg/1200px-HDFC_Life_Logo.svg.png', // Replace with your actual image source URL
            years: 20,
            percentage: 7,
            monthlyPension: 8000,
        },
        {
            id: 3,
            imageSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/HDFC_Life_Logo.svg/1200px-HDFC_Life_Logo.svg.png', // Replace with your actual image source URL
            years: 18,
            percentage: 9,
            monthlyPension: 8500,
        },
    ];


    return (
        <div className="flex h-[100%] justify-center  w-[100%] ">

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


            <div className="w-[65%] p-8 bg-[#f2f7ff] h-screen">
                <div className="w-[100%] rounded-[20px]">
                    {/* Plan divs */}
                    <div className="flex flex-wrap rounded-[20px]">
                        {plans.map((plan) => (
                            <div key={plan.id} className="bg-white p-4 shadow-md mb-4 flex items-center relative w-full rounded-[10px]">
                                {/* Section 1: Plan image */}
                                <img src={plan.imageSrc} alt={`Plan ${plan.id}`} className="w-25 h-20 object-cover mr-4 rounded" />
                                <div className="w-[1px] h-full bg-[#e6e9ed]"></div>
                                {/* Section 2: Years return and percentage */}
                                <div className="flex-grow text-center">
                                    <p className="text-md font-semibold text-[gray]">{plan.years} years return</p>
                                    <p className="text-lg font-semibold text-gray-700">{plan.percentage}%</p>
                                </div>

                                {/* Section 3: Tax-free div with pension tag */}
                                <div className="w-[1px] h-full bg-[#e6e9ed]"></div>
                                <div className="flex flex-col flex-grow text-center items-center justify-center mt-5">
                                    <div className='flex'>
                                        <div className="border w-[54px] h-[20px] text-[12px] border-green-500 text-green-500  rounded-md mx-4">
                                            Tax-Free
                                            <br />

                                        </div>
                                        <span className="text-md text-gray-700">Pension</span>
                                    </div>


                                    <p className="text-md text-center mb-4">₹{plan.monthlyPension}</p>

                                </div>

                                {/* Section 4: Monthly pension with rupee symbol and Get Details button */}
                                <div className="flex flex-col items-center px-2">
                                    <button className="text-white bg-[#6A4FF7] p-2 rounded  text-sm">
                                        Get Details {'>'}
                                    </button>
                                </div>

                                {/* Vertical bar to separate each section */}

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourComponent;
