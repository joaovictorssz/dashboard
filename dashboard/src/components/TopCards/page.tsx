import React from 'react'
import Card from './Card/page'

export default function TopCard() {
  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4'>
        <Card value={1000} origin='Daily Revenue' percent={Math.floor(Math.random())}/>
        <Card value={2000} origin='Imobiliary Founds' percent={Math.floor(Math.random())}/>
        <Card value={1200} origin='Fixed' percent={Math.floor(Math.random())}/>
    </div>
  )
}
