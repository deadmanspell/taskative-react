import React from 'react'

const LoginCard = ({children}) => {
  return (
    <div className='flex flex-col w-[543px] h-fit px-8 py-4 rounded-xl bg-white shadow-xl space-y-4'>
        {children}
    </div>
  )
}

export default LoginCard