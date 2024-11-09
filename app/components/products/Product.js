"use client"

import React, { useState } from 'react'
import Link from "next/link"
// function Product({product}) {
function Product({ imageUrl, name, price, id }) {

  const [showImage, setShowImage] = useState(false)
  return (
    <div>
      <img onClick={() => setShowImage(true)} src={imageUrl} className='w-full h-40 object-cover' />
      <Link href={"/products/" + id}>
        <div className='p-4'>
          {name}<br />
          <span className='text-red-700'>
            {price}
          </span>
        </div>
      </Link>

      {showImage && <div className='fixed w-screen h-screen left-0 top-0 flex justify-center items-center'>

        <div className='w-96 h-1/2 relative rounded-md overflow-hidden border shadow'>
          <div className='absolute top-2 right-2' onClick={() => setShowImage(false)}>x</div>
          <img src={imageUrl} className='w-full h-full object-cover' />
        </div>
      </div>
      }
    </div>
  )
}

export default Product