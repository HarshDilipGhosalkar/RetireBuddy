import React, { useState } from 'react';

const Modal = ({ isOpen, closeModal,onAddCategory }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState(0);

  const handleAddItem = () => {
    console.log(`Added Item: ${itemName} - Price: ${itemPrice}`);
    onAddCategory(itemName,itemPrice);
    closeModal();
  };

  return (
    <div className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md w-96 h-80">
        <span
          className="absolute top-2 right-2 cursor-pointer text-xl"
          onClick={closeModal}
        >
          &times;
        </span>
        <h2 className="text-2xl mb-4">Add Item</h2>
        <label htmlFor="itemName" className="block mb-2 text-sm font-semibold">
          Item Name:
        </label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter the item name"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-500"
        />
        <label htmlFor="itemPrice" className="block mb-2 text-sm font-semibold">
          Item Price:
        </label>
        <input
          type="number"
          id="itemPrice"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          placeholder="Enter the item price"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Modal;
