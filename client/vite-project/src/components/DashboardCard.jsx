import React from 'react'

const DashboardCard = ({Color,Icon,iconsColor,}) => {
  return (
    <div className='md:p-4 lg:p-4  p-3 w-fit bg-slate-200 flex  rounded-xl '>
        <p className={`md:p-8 lg:p-6 p-10 ${Color} self-center rounded-xl`} >
             <Icon size={40} color={iconsColor}/>
        </p>
        <p className='p-5  text-black flex flex-col'>
          <span className='text-5xl font-semibold'>1202</span>
          <span className='text-xl'>current spend</span>
        </p>
    </div>
  )
}

export default DashboardCard

