"use client"
import React, { useState } from 'react';
import { orgRequest } from '@/lib/api';
import { useAuthStore } from '@/lib/store';



interface FormProps { }

const Form: React.FC<FormProps> = () => {
  const [formData, setFormData] = useState({
    aadhar: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const token = useAuthStore((state) => state.token) || ""
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await orgRequest(token, formData.aadhar)


    } catch (error) {
      console.log(error);

    }
  };

  return (
    <>
      <h1 className='text-4xl font-bold mt-10'>
        Send a new request
      </h1>
      <form onSubmit={handleSubmit} className="w-[35rem] mx-auto mt-10 px-16 py-16 border rounded-lg drop-shadow-lg bg-white">
        <div className="mb-4">
          <label htmlFor="aadhar" className="block text-sm font-medium text-gray-700">Aadhar Card Number</label>
          <input
            type="text"
            name="aadhar"
            id="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
      </form>
    </>
  );
};

export default Form;
