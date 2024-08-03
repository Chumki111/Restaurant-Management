import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Sign Up</h2>
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary "
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Password Field with Icon */}
          <div className="relative">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500">Password</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm pr-12 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 top-[40%] flex items-center justify-center cursor-pointer"
            >
              {passwordVisible ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </button>
          </div>

          {/* Image Upload Field */}
          <div>
            <label htmlFor="image" className="block text-gray-700 font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500">Upload Image</label>
            <input
              type="file"
              id="image"
              className="w-full bg-gray-50 text-gray-800 hover:file:bg-primary-dark  file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-primary file:text-black
      hover:file:bg-violet-100"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary w-full text-white px-4 py-2 rounded-md shadow-md hover:bg-primary-dark transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
