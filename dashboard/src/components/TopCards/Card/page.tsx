import React from 'react'

export default function Card({value, origin, percent}:
    {
        value: string | number,
        origin: string,
        percent: number
    }) {
  return (
    <div className='lg:col-span-1 dark:bg-slate-800 dark:border-slate-700 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>${value},00</p>
            <p className='text-gray-600'>{origin}</p>
        </div>

        <p className={`${percent < 0 ? 'bg-red-200' : 'bg-green-200'} flex justify-center items-center p-2 rounded-lg`}>
            <span className={`${percent < 0 ? 'text-red-700' : 'text-green-700'} text-lg`}>{percent}%</span>
        </p>
    </div>
  )
}
