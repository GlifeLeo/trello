'use client'

import React, { useContext, useState } from 'react'
import { UserContext } from '@/app/contexts/UserProvider'
import { CartContext } from '@/app/contexts/CartProvider'

function Menu() {
  const { user } = useContext(UserContext)

  const { itemsCount } = useContext(CartContext)
  const [showUserProfile, setShowUserProfile] = useState()
  return (
    <div className="flex justify-between bg-slate-200 py-2 px-4 items-center">
      <div>
        Logo
      </div>
      {/* avatar */}
      <div className='flex gap-x-4 items-center'>
        <div className='relative'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {!!itemsCount && <div className='bg-red-500 -top-2 -right-2  text-white absolute w-6 h-6 text-center rounded-full'>
            {itemsCount}
          </div>}
        </div>

        <di onClick={() => setShowUserProfile(!showUserProfile)} className='w-10 h-10 rounded-full border border-red-500 flex items-center justify-center relative'>
          {user?.name.charAt(0).toUpperCase()}
          {/* profile popup */}
          {showUserProfile && <div className='absolute p-4 min-w-40 bg-white border rounded-md shadow top-11 right-0'>
            <div className='whitespace-nowrap'>
              Name:{user?.name} <br />
              Email: {user?.email} <br />
            </div>
          </div>}
        </di>
      </div>
    </div>
  )
}

export default Menu