"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { login } from "@/backend_fake/be"
function LoginPage() {
  const router = useRouter()
  const [state, setState] = useState({
    username: "",
    password: ""
  })
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")

  function handleLogin() {
    const { username, password } = state
    const res = login(username, password)
    if (res.success) {
      localStorage.setItem("token", res.token)
      router.push("/")
    } else {
      console.log(res.message)
    }
    // api login => token =>cookie/ local storage
    // success: true
  }

  return (
    <div className='w-96 mx-auto py-10'>
      <p>Username</p>
      <input
        onChange={(e) => {
          // setUsername(e.target.value)
          setState({
            ...state,
            // password:state.password,
            username: e.target.value
          })
        }}
        className='border h-10 w-full' />
      <p>
        Password
      </p>
      <input
        onChange={(e) => {
          setState({
            ...state,
            // password:state.password,
            password: e.target.value
          })
        }}
        type='password' className='border h-10 w-full' />
      <div>
        <button
          onClick={handleLogin}
          className='border rounded-lg bg-black text-white py-2 px-6'>
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginPage