import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/userSlice';
import { Link, redirect } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register({ email, password }));
  };

  return (
    <form onSubmit={handleRegister} className="mt-10 space-y-4 p-4 bg-white shadow-md rounded-lg max-w-sm mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Register</h1>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="mb-2 font-medium text-gray-700">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register
      </button>

      <p>Already have an account? <Link to="/login" className='text-blue-500'>Login</Link></p>
    </form>
  );
};

export default Register;
