import React from "react";
import Input from "./Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const PasswordInput = ({ placeholder = "Enter password", inpName = 'password' }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex relative">
      <Input
        type={showPassword ? "text" : "password"}
        inpName={inpName}
        placeholder={placeholder}
      />
      <button
        type="button"
        className="text-white font-bold text-xl absolute top-1/2 right-4 -translate-y-1/2"
        onClick={handlePasswordVisibility}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
  );
};

export default PasswordInput;
