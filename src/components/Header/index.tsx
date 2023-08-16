import React from 'react'

import { Home as Logo } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <div className="h-[65px] w-full border-b">
      <div className="w-full w-max-scr-desktop mx-auto my-0 h-full flex justify-between items-center py-0 px-[25px] bg-background">
        <div className="flex items-center">
          <Logo size={24}></Logo>
          <Link to={'/'}>
            <h1 className="inline-block select-none ml-2 text-2xl font-normal">
              boiler
            </h1>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Header
