import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";

const Login = () => {

  const [canLogIn, setCanLogIn] = useState(null)

  const loginSubmitHandler = async (e) => {
    e.preventDefault()

    const formdata = new FormData(e.target)
    
    const username = formdata.get('username')
    const password = formdata.get('password')

    if (username.trim() == '' || password.trim() == '') {
      return console.error('something went wrong!')
    }

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: formdata
      })

      const data = await res.json()
      setCanLogIn(data.ok)

      e.target.reset()
      
    } catch (err) {
      console.log('Fetching error: ', err)
      setCanLogIn(false)
    }
  
  }
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" w-[450px] max-w-[450px] min-w-[300px] flex flex-col gap-3 items-center p-4 rounded-2xl border-2 border-amber-50/60">
        <h2 className="text-2xl font-semibold">Login</h2>
        <form 
        onSubmit={loginSubmitHandler}
        className="flex flex-col gap-2 p-2 w-full">
          <Input
            type="text"
            inpName="username"
            placeholder="Enter username"
          />

          <PasswordInput />

          <Button bg="pink" text="Login" />
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline ml-1">
            Create an account
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
