import React from 'react'
import TodoList from '../component/TodoList'
import { Route, Routes } from 'react-router-dom'
import Login from '../features/Login'
import Signup from '../features/Signup'

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/todo" element={<TodoList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default Layout
