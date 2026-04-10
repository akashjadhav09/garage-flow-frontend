import React from "react";
import { useNavigate } from "react-router-dom";

const SignInCard = () => {
    const navigate = useNavigate();

    function handleSignUpRoute(){
        navigate("/signup")
    }

  return (
    <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6">
      
      {/* Logo */}
      <div className="flex flex-col items-center mb-4">
        <div className="text-xl font-bold">🚗 Logo</div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Welcome Back!
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Please sign in to your account
      </p>

      {/* Form */}
      <form className="space-y-4">
        
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <span className="absolute right-3 top-2 text-sm text-blue-500 cursor-pointer">
            Forgot Password?
          </span>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Sign In
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-500 mt-4">
        Don't have an account?{" "}
        <span className="text-blue-600 cursor-pointer"
            onClick={handleSignUpRoute}>Sign Up</span>
      </p>
    </div>
  );
};

export default SignInCard;