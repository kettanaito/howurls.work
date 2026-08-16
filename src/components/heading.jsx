import React from 'react'

export const Heading = ({ children }) => {
  return (
    <h3 className="mb-[0.5em] flex text-[1.25rem] font-semibold text-black before:mt-[5px] before:mr-[1ch] before:inline-flex before:h-[20px] before:w-[20px] before:items-center before:justify-center before:rounded-full before:bg-primary before:font-mono before:text-[12px] before:text-white before:content-['i']">
      {children}
    </h3>
  )
}
