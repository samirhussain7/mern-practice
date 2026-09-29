import React from 'react'

const Input = ({ type, inpName, placeholder }) => {
  return (
    <input className='w-full border outline-none select-none border-amber-50/20 p-2 px-2.5 rounded-md autofill:shadow-[0_0_0_1000px_#242323_inset] autofill:[-webkit-text-fill-color:white] ' type={type} name={inpName} placeholder={placeholder} required />
  )
}

export default Input
