import React from 'react';
import loginImg from '../assets/lmao.jpg';

export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
      <div className="flex-shrink-0 hidden sm:block">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={loginImg}
          alt="Login background"
        />
      </div>
      <div className="flex items-center justify-center p-8 sm:p-12">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-center py-6">E-Kumpas</h2>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input className="border p-2 rounded-md" type="text" />
          </div>

          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2 rounded-md" type="password" />
          </div>

          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md">
            Sign In
          </button>

          <div className="flex justify-between py-2">
            <p className="flex items-center">
              <input className="mr-2 rounded-md" type="checkbox" /> Remember Me
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}