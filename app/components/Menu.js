'use client'

import React, { useContext, useState } from 'react'
import { UserContext } from '@/app/contexts/UserProvider'

function Menu() {
  const { user, bgClassName } = useContext(UserContext)
  const [showUserProfile, setShowUserProfile] = useState()
  return (
    <div className="flex justify-between bg-slate-200 py-2 px-4 items-center">
      <div>
        list menu
        {bgClassName}
      </div>
      {/* avatar */}
      <div onClick={() => setShowUserProfile(true)} className='w-10 h-10 rounded-full border border-red-500 flex items-center justify-center relative'>
        {user?.name.charAt(0).toUpperCase()}
        {/* profile popup */}
        {showUserProfile && <div className='absolute p-4 min-w-40 bg-white border rounded-md shadow top-11 right-0'>
          <div className='whitespace-nowrap'>
            Name:{user?.name} <br />
            Email: {user?.email} <br />
          </div>
          <button
            className='absolute right-1 top-0'
            onClick={(e) => {
              e.stopPropagation()
              setShowUserProfile(false)
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>}
      </div>


    </div>
  )
}

export default Menu