import React from 'react'

const Input = ({type= "text", onChange, value }) => {
  return (
    <>
    <input type={type}  value={value} onChange={onChange} />
    </>
  )
}

export default Input;