"use client"

import React, { useEffect, useState } from 'react'
import { getLists, createNewList, deleteList, editList } from "@/backend_fake/be"
import Loading from "@/app/components/common/Loading"

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
              {/* <div onClick={() => {
                setSelectedIndex(index)
                setShowEdit(true)
              }}>
                {list.listName}
              </div> */}

              <input
                className='w-full'
                defaultValue={list.listName}
                onClick={() => {
                  setEditListName(list.listName)
                  setSelectedIndex(index)
                  setShowEdit(true)
                }}
                onChange={(e) => setEditListName(e.target.value)}
              />
              {showEdit && selectedIndex == index && <>
                <button className='mr-2' onClick={() => setShowEdit(false)}>Cancel</button>
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