import React from 'react'

const Button = ({bg, text}) => {

    const bgColor = {
       blue: "bg-blue-500 hover:bg-blue-600",
       pink: "bg-pink-400 hover:bg-pink-500"
    }
    
  return (
    <button className={`${bg === 'blue' ? bgColor.blue : bg === 'pink' ? bgColor.pink : "bg-gray-400" } py-2 rounded-md cursor-pointer duration-200`}>{text}</button>
  )
}

export default Button
