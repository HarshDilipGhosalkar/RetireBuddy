
"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Pie } from '@/app/predict/pie';
import { ProgressBar } from './progress';


const predict = () => {
  const progressValue = 75;
  const [count, setCount] = useState(4);
  const [label, setLabel] = useState(['Grocery', 'Electricity bill', 'Gas bill', 'House maintainence', 'Medications']);
  const [colorList, setColorList] = useState(['#4C7CFF', '#FF6B6B', '#63B3ED', '#FFD166', '#A0D468']);
  // const [predictionList, setPredictionList] = useState([
  //   { id: 0, content: 'Grocery', bgColor: '#4C7CFF' }, // Red with Black border
  //   { id: 1, content: 'Electricity bill', bgColor: '#FF6B6B' }, // Blue with Black border
  //   { id: 2, content: 'Gas bill', bgColor: '#63B3ED'}, // Green with Black border
  //   { id: 3, content: 'House maintainence', bgColor: '#FFD166' }, // Yellow with Black border
  //   { id: 4, content: 'Medications', bgColor: '#A0D468'}, // Purple with Black border
  // ]);
  const [data, setData] = useState([5000, 2000, 1700, 500, 200]);
  const pieChartColors = [
    '#4C7CFF', '#FF6B6B', '#63B3ED', '#FFD166', '#A0D468',
    '#ED5565', '#48CFAD', '#AC92EB', '#FFCE54', '#6A6A6A',
    '#EC87C0', '#5DB2FF', '#FFD700', '#9F9F9F', '#37BC9B',
    '#967ADC', '#FF7857', '#5E5E5E', '#DA4453', '#80D3E6',
  ];

  const handleUpdateCategory = (index, newVal) => {
    const newData = [...data];

    newData[index] = newVal;

    setData(newData);
  };


  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="p-[30px]">
      <div className="  flex">
        <div className="w-[40%] bg-[white] ">
          <div className="font-medium text-[18px]">Categories</div>
          <div className="text-[12px] mb-[30px]">Enter monthly spendings in each category</div>
          <div className='mb-[40px]'>
            {label.map((item, index) => (
              <div className="flex flex-row justify-between pr-[50px] py-[20px] pl-[20px] ">
                <div className='flex flex-col items-start  relative'>
                  <h1 className="font-medium text-[16px] relative top-[-8px]">{item}</h1>
                  <div className="flex items-center justify-center ">
                    <ProgressBar progress={progressValue} color={colorList[index]} />
                  </div>

                </div>
                <div>
                  <input
                    type="number"
                    placeholder="₹ 0.00"
                    value={data[index]}
                    class={`p-2 w-[120px] hover:border-[1px] hover:border-[gray] rounded-md`}
                    style={{ borderColor: colorList[index], borderWidth: '1px', borderStyle: 'solid' }}
                    onChange={(e) => handleUpdateCategory(index, parseInt(e.target.value))}
                  />
                  <span className="ml-2">
                    <FontAwesomeIcon icon={faTrash} className="text-[gray]" />

                  </span>
                </div>
              </div>
            ))}

          </div>
          <div className='flex justify-between'>
            <div className="border border-[#2EADE2] py-1 px-4 flex items-center cursor-pointer text-[#003865] font-medium rounded-md text-[14px]">
              <span className="text-[#2EADE2] mr-2 text-[20px] font-bold">+</span>
              Add New Category
            </div>
          </div>
        </div>
        <div className='w-[50%] flex justify-center items-center'>
          <div className='w-[60%]'>  <Pie label={label} color={colorList} pieData={data} /></div>

        </div>
      </div>
    </div>
  );
};
export default predict;
