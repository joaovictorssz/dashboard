import React from 'react'

export default function Header({title}: {title:string}) {
  return (
    <header className='flex justify-between px-4 pt-4'>
        <h2>{title}</h2>
        <h2>Welcome!</h2>
    </header>
  )
}
