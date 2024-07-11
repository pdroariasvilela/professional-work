import React from 'react'
import ButtonPrimayHig from './ButtonPrimayHight'

const ContactMe = ({ MaskBG }) => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-gradient-to-b from-neutral-800 to-neutral-900 z-0 overflow-hidden py-[100px]">
      <h1 className="text-white text-custom-48 font-bold md:text-md lg:text-custom-88 font-inter text-center leading-tight my-7">
        let's work together
      </h1>
      <ButtonPrimayHig>Contact Me 👋</ButtonPrimayHig>
      <img src={MaskBG} className="absolute inset-0 z-[-1] w-full object-cover " alt="" />
    </div>
  )
}

export default ContactMe
