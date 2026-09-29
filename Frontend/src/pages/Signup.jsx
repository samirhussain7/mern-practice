import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const username = formdata.get('username')
    const email = formdata.get('email')
    const password = formdata.get('password')
    const confirmPassword = formdata.get('confirm-password')


    if (username.trim() == '' || username.length.trim() < 3 || email.trim() == '' || password.trim().length < 6 ) {
      return console.error('something went wrong!')
    }

    if (password === confirmPassword) {

      const sending = async () => {
        try {
          const res = await fetch('http://127.0.0.1:3000/signup', {
            method: 'POST',
            body: formdata
          })

          console.log(await res.json())

          setIsSubmitted(true)
          
          const timeoutId = setTimeout(() => {
            setIsSubmitted(false)
            clearTimeout(timeoutId)
          }, 3000)

        } catch (err) {
          console.log(err)
        }
      }
      
      sending()
      
      e.target.reset()
    }
    
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className={`msg flex gap-1 items-center bg-green-400 text-black px-4 pb-0.5 rounded-2xl absolute ${isSubmitted ? 'top-4' : '-top-10'} duration-200`}>Form submitted <FaCheckCircle /> </div>
      <div className=" w-[450px] max-w-[450px] min-w-[300px] flex flex-col gap-3 items-center p-4 rounded-2xl border-2 border-amber-50/60">
        <h2 className="text-2xl font-semibold">Create Account</h2>
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-2 p-2 w-full"
        >
          <Input type="text" inpName="username" placeholder="Enter username" />
          <Input type="email" inpName="email" placeholder="Enter email" />
          <PasswordInput placeholder="Enter password" inpName="password" />
          <PasswordInput placeholder="Confirm password" inpName="confirm-password" />
          <Button bg="blue" text="Create Account" />
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline ml-1">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
