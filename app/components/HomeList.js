"use client"

import React, { useEffect, useState } from 'react'
import { getLists } from "@/backend_fake/be"
import Loading from "@/app/components/common/Loading"

function HomeList() {
  const [lists, setLists] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    //logic
    setLoading(true)
    const tempLists = getLists()// get data from back end
    setLists(tempLists)
    // fake loading
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      Home
      {
        lists.length > 0 && lists.map((list, index) => {
          return <ul key={index}>
            {list.listName}
          </ul>
        })
      }
    </div>
  )
}

export default HomeList