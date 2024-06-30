import React, { useState } from 'react';
import { loginCitizen } from '@/lib/api';
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/store';

interface LoginCitizenProps { }

const LoginCitizen: React.FC<LoginCitizenProps> = () => {
  const setToken = useAuthStore((state)=>state.setToken)
  const storeType = useAuthStore((state)=>state.setType);
  const router = useRouter()
  const [formData, setFormData] = useState({
    aadhar: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await loginCitizen(formData) as {data:{data:{token:string}}, status: number }
      if (res.status === 201) {
        setToken(res.data.data.token)
        storeType("citizen")
        localStorage.setItem("usertype","citizen")
        localStorage.setItem("token",res.data.data.token)
        router.push("/")
      }
    
    console.log('Form Data:', res);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
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
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Login</button>
    </form>
  );
};

export default LoginCitizen;
