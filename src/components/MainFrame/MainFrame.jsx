import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import RouterView from './RouteView'
import './MainFrame.css'

export default function MainFrame() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      
      <div className='router-view'>
        <RouterView ></RouterView>
      </div>
    </BrowserRouter>
  )
}

