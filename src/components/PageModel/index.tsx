import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const PageModel: React.FC = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <Header></Header>
      <div className="w-full max-w-screen-2xl mx-auto my-0">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default PageModel
