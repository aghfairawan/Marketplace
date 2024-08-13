import React from 'react';

const sampleCartItems = [
  { id: 1, name: 'Masakan Padang', quantity: 2, price: 50000 },
  { id: 2, name: 'Masakan Sunda', quantity: 1, price: 30000 },
];

const Cart = () => {
  const total = sampleCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        <ul>
          {sampleCartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b border-gray-300 py-4">
              <span>{item.name}</span>
              <span>{item.quantity} x {item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg font-bold">Total:</span>
          <span className="text-lg font-bold">{total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
        </div>
        <button className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
