"use client"

import React, { useState } from 'react'
import Link from "next/link"
// function Food({Food}) {
function Food({ imageUrl, name, price, id }) {
  const [like, setLike] = useState(false)
  return (
    <Link href={"/food-menu/" + id}>
      <img src={imageUrl} className='w-full h-40 object-cover' />
      <div className='p-4'>
        {name}<br />
        <div className='flex justify-between' >
          <span className='text-red-700'>  {price}</span>
          {like ?
            <div onClick={(e) => {
              e.stopPropagation()
              setLike(false)
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg></div> :
            <div onClick={(e) => {
              e.stopPropagation()
              setLike(true)
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          }
        </div>
      </div>
    </Link>
  )
}

export default Food