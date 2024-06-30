import React, { useState } from 'react';
import { loginOrg } from '@/lib/api';
import { useAuthStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { orgDetails } from '@/lib/api';

interface LoginOrgProps {}

const LoginOrg: React.FC<LoginOrgProps> = () => {
  const storeToken = useAuthStore((state)=>state.setToken);
  const storeType = useAuthStore((state)=>state.setType);
  const setFirstLetter = useAuthStore((state)=>state.setFirstLetter);
  const router  = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const res = await loginOrg(formData) as {data:{data:{token:string}}, status: number };
    if(res.status===201){
      storeToken(res.data.data.token)
      const obj = await orgDetails(res.data.data.token) as {ok:boolean,data:{name:string}}
      if(obj.ok){
        setFirstLetter(obj.data.name[0])
      }
      storeType("Org")
      localStorage.setItem("usertype","org")
      localStorage.setItem("token",res.data.data.token)
      router.push("/")
    }
    console.log('Form Data:', res);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
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

export default LoginOrg;
