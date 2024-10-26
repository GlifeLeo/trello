"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation"
import { editListById } from "@/backend_fake/be"
import Loading from '@/app/components/common/Loading'

function ListDetail() {
  const listId = useParams().listId
  const [listDetail, setListDetail] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (listId) {
      setLoading(true)
      const list = editListById(listId)
      console.log(list)
      setListDetail(list)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }

  }, [listId])

  if (loading) {
    return <Loading />
  }
  return (
    <div className='p-4'>ListDetail
      <br />
      {listDetail?.id}<br />
      {listDetail?.listName}<br />
    </div>
  )
}

export default ListDetail