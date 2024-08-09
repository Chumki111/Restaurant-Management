import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSuubmit = e => {
    e.preventDefault();
    // const form = 
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 ">
      <div className="w-full max-w-md  p-8 rounded-lg shadow-lg ">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text">Sign Up</h2>
        <form className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <label

              className="block bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Name
            </label>
            <div className="relative w-full p-[2px] bg-gradient-to-r from-secondary to-tertiary rounded-md">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-white border-none rounded-md focus:outline-none  transition-colors duration-300"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Email
            </label>
            <div className="relative w-full p-[2px] bg-gradient-to-r from-secondary to-tertiary rounded-md">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-white border-none rounded-md focus:outline-none  transition-colors duration-300"
                required
              />
            </div>
          </div>

          {/* Password Field with Icon */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Password
            </label>
            <div className="relative w-full p-[2px] bg-gradient-to-r from-secondary to-tertiary rounded-md">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full p-3 bg-white border-none rounded-md focus:outline-none  transition-colors duration-300"
                required
              />
               <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3  flex items-center justify-center cursor-pointer bgt"
            >
              {passwordVisible ? <FaEyeSlash className="text-gray-300" /> : <FaEye className="text-gray-300" />}
            </button>
            </div>
            
           
          </div>

          {/* Image Upload Field */}
          <div className="relative">
            <label
              htmlFor="image"
              className="block bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500 "
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              className="w-full bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-black hover:file:bg-tertiary transition-colors duration-300 bg-transparent"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-5">
            <button
              type="submit"
              className=" w-full bg-gradient-to-r from-secondary to-tertiary bg-transparent px-4 py-2 rounded-md shadow-2xl transition-all duration-300 transform hover:scale-105"
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
