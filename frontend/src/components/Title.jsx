import React from 'react'

const Title = ({title,desc}) => {
  return (
    <div className='inline-flex items-center gap-2 mb-3'>
      <p className='text-gray-500'>
        {title} <span className='text-gray-700 font-medium'>{desc}</span>
      </p>
      
      <hr className="w-8 border-none h-[1.5px] bg-gray-700 " />
    </div>
  )
}

export default Title
