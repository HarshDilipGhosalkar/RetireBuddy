
"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Pie } from '@/app/predict/pie';
import { ProgressBar } from './progress';
import Modal from './addItemModal';


const predict = () => {

  const [totalExpence, setTotalExpence] = useState(9200);
  const [count, setCount] = useState(3);
  const [label, setLabel] = useState(['Grocery', 'Electricity bill', 'Gas bill', 'House maintainence']);
  // const [colorList, setColorList] = useState(['#4C7CFF', '#FF6B6B', '#63B3ED', '#FFD166']);

  const [predictionList, setPredictionList] = useState([
    { content: 'Grocery', expence: 5000 },
    { content: 'Electricity bill', expence: 2000 },
    { content: 'Gas bill', expence: 1700 },
    { content: 'House maintainence', expence: 500 },
  ]);

  const [data, setData] = useState([5000, 2000, 1700, 500]);

  const pieChartColors = [
    '#4C7CFF', '#FF6B6B', '#63B3ED', '#FFD166', '#A0D468',
    '#ED5565', '#48CFAD', '#AC92EB', '#FFCE54', '#6A6A6A',
    '#EC87C0', '#5DB2FF', '#FFD700', '#9F9F9F', '#37BC9B',
    '#967ADC', '#FF7857', '#5E5E5E', '#DA4453', '#80D3E6',
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };


  const closeModal = () => {
    setModalOpen(false);
  };

  const handleUpdateCategory = (index, newVal) => {
    // console.log(index,newVal);
    // const newData = [...data];

    //   newData[index] = parseInt(newVal);
    //   setData(newData);
    //   setTotalExpence(totalExpence - data[index] + parseInt(newVal))
    if (isNaN(newVal)) {
      const newData = [...data];
      newData[index] = 0;
      setData(newData);
      setTotalExpence(totalExpence - data[index])
      console.log("yes its nana")
    } else {
      const newData = [...data];

      newData[index] = parseInt(newVal);
      setData(newData);
      setTotalExpence(totalExpence - data[index] + parseInt(newVal))
    }
   


  };

  const handleAddCategory = (category, expence) => {
    const newItem = {
      id: count + 1,
      content: category,
      expence: parseInt(expence)
    }

    setTotalExpence(totalExpence + parseInt(expence));
    setLabel([...label, category])
    setData([...data, parseInt(expence)]);
    // setColorList([...colorList,pieChartColors[count+1]])
    setPredictionList([...predictionList, newItem])

    setCount(count + 1);

    closeModal();
  };


  const handleRemoveElement = (index) => {
    setTotalExpence(totalExpence - data[index])
    const newData = data.filter(element => element !== data[parseInt(index)]);
    const newLabel = label.filter(element => element !== label[parseInt(index)]);
    const newList = predictionList.filter((_, index) => index !== parseInt(index));
    setData(newData);
    setLabel(newLabel);
    setPredictionList(newList)
    setCount(count-1);
  };

  // useEffect(() => {
  //   console.log(totalExpence);
  // }, [data]);

  return (
    <div className="p-[30px]">
      <div className="  flex justify-between">
        <div className="w-[55%] bg-[white] ">
          <div className="font-medium text-[18px]">Categories</div>
          <div className="text-[12px] mb-[30px]">Enter monthly spendings in each category</div>
          <div className='mb-[40px] w-[100%]'>
            {label.map((item, index) => (
              <div className="flex flex-row justify-between pr-[50px] py-[20px] w-[100%] ">
                <div className='flex flex-col items-start  relative w-[65%]'>
                  <h1 className="font-medium text-[16px] relative top-[-8px]">{item}</h1>
                  <div className="flex items-center justify-center w-[90%] ">
                    <ProgressBar progress={(data[index] / totalExpence) * 100} color={pieChartColors[index]} />
                  </div>

                </div>
                <div className='w-[35%]'>
                  <input
                    type="number"
                    placeholder="₹ 0.00"
                    value={data[index]}
                    class={`px-2 py-1 w-[100px] hover:border-[1px] hover:border-[gray] rounded-md`}
                    style={{ borderColor: pieChartColors[index], borderWidth: '1px', borderStyle: 'solid' }}
                    onChange={(e) => handleUpdateCategory(index, parseInt(e.target.value))}
                  />
                  <span className="ml-2 cursor-pointer">
                    <FontAwesomeIcon icon={faTrash} className="text-[gray]" onClick={() => handleRemoveElement(index)} />
                  </span>
                </div>
              </div>
            ))}

          </div>
          <div className='flex justify-between'>
            <div className="border border-[#2EADE2] py-1 px-4 flex items-center cursor-pointer text-[#003865] font-medium rounded-md text-[14px]" onClick={openModal}>
              <span className="text-[#2EADE2] mr-2 text-[20px] font-bold">+</span>
              Add New Category
            </div>
          </div>
        </div>
        <div className='w-[50%] flex flex-col  items-center relative text-center'>
          <div className="font-medium text-[18px] mb-[50px]">Expense Distribution</div>
          <div className='w-[80%]'>  <Pie label={label} color={pieChartColors.slice(0, count + 1)} pieData={data} /></div>
          <div className=' absolute top-[57%]'>
            <div>Total montly expenses</div>
            <div className='font-bold text-[16px]'>₹  {totalExpence}</div>
          </div>
        </div>
        <Modal isOpen={isModalOpen} closeModal={closeModal} onAddCategory={handleAddCategory} />
      </div>

    </div>
  );
};
export default predict;
