"use client"

import React, { useEffect, useState } from 'react'
import { getLists, createNewList, deleteList, editList } from "@/backend_fake/be"
import Loading from "@/app/components/common/Loading"
import Link from "next/link"

function HomeList() {
  const [lists, setLists] = useState([])
  const [loading, setLoading] = useState(false)
  const [showNewAnotherList, setShowNewAnotherList] = useState(false)
  const [newListName, setNewListName] = useState("")
  const [showEdit, setShowEdit] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [editListName, setEditListName] = useState("")

  function getData() {
    const tempLists = getLists()// get data from back end
    setLists(tempLists)
  }

  useEffect(() => {
    //logic
    setLoading(true)
    getData()
    // fake loading
    setTimeout(() => {
      setLoading(false)
    }, 100);
  }, [])



  if (loading) {
    return <Loading />
  }

  function handleCreateNewList() {
    createNewList(newListName)
    getData()
    setShowNewAnotherList(false)
    setNewListName("")
  }

  function handleUpdateListName() {
    editList(selectedIndex, editListName)
    getData()
    setSelectedIndex(0)
    setShowEdit(false)
  }

  function handleDeleteList(index) {
    deleteList(index)
    getData()
  }

  return (
    <div className='min-w-screen overflow-auto p-4'>
      <ul className="grid grid-cols-4 gap-4">
        {
          lists.length > 0 && lists.map((list, index) => {
            return <li key={index} className=' flex justify-between border min-h-8 rounded-lg py-1 px-3'>
              <div>
                <input
                  value={selectedIndex == index ? editListName || list.listName : list.listName}
                  className='w-full'
                  onClick={() => {
                    setEditListName(list.listName)
                    setSelectedIndex(index)
                    setShowEdit(true)
                  }}
                  onChange={(e) => setEditListName(e.target.value)}
                />
                <Link href={"list-detail/" + list.id}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg></Link>
              </div>
              {showEdit && selectedIndex == index && <>
                <button className='mr-2' onClick={() => {
                  setEditListName(list.listName)
                  setShowEdit(false)
                }
                }>Cancel</button>
                <button onClick={handleUpdateListName}>Save</button>
              </>}
              <button className='ml-3' onClick={() => handleDeleteList(index)}>
                x
              </button>
            </li>
          })
        }

        {
          showNewAnotherList ? // show form
            <div className='min-w-42 max-w-42 border min-h-8 rounded-lg py-3 px-3'>
              <input
                onChange={(e) => setNewListName(e.target.value)}
                className='w-full border rounded px-2 py-1' placeholder='list name' />
              <button onClick={() => handleCreateNewList()} className='rounded bg-black text-white whitespace-nowrap px-3 mr-5 mt-4'>
                Add
              </button>
              <button onClick={() => setShowNewAnotherList(false)}>
                X
              </button>
            </div> :// neu khong sho form
            <button onClick={() => setShowNewAnotherList(true)} className='rounded-lg p-2 bg-black text-white whitespace-nowrap'>
              Add another list
            </button>
        }

      </ul>
    </div>
  )
}

export default HomeList