import Image from 'next/image'
import React from 'react'
import PropTypes from "prop-types";
import me from '../../../public/me.jpeg';

const Card = ({size='small'}) => {
  const small = ['flex-row','h-[118px]','pl-6'].join(' ');
  const medium =['flex-col','h-[198px]','items-center','justify-center'].join(' '); 

  return (
    <div className={`flex bg-white w-80 rounded-lg border-2 border-black  py-6 gap-4 ${size=='small' ? small : medium}`}>
      <div className='flex justify-center  rounded-full bg-blue-300 w-[70px] h-[70px] '><Image alt='image' src={me} height={50} width={50}  className='rounded-full' /></div>
      <div className={`flex flex-col gap-2 ${size=='medium' && 'text-center' }`}>
        <h4 className='text-lg'>Title</h4>
        <p className='text-sm'>Description</p>
      </div>
    </div>
  )
}

export default Card

Card.propTypes ={
    size: PropTypes.string
}
