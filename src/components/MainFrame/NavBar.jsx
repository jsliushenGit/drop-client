import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

function NavContainer({icon, title, name, href}) {
  let RenderDOM = null
  if (name === 'tally') {
    RenderDOM = (
      <a>
        <span className={`iconfont ${icon}`}></span>
        <span>{title}</span>
      </a>
    )
  } else {
    RenderDOM = (
      <NavLink activeClassName="actived" to={href}>
        <span className={`iconfont ${icon}`}></span>
        <span>{title}</span>
      </NavLink>
    )
  }
  
  return (
    <div className={`nav-container ${name}`}>
      {RenderDOM}
    </div>
  )
}

export default function NavBar() {
  const Menu = [
    {
      title: '明细',
      icon: 'icon-zhangdan',
      href: '/detail',
      name: 'detail'
    },
    {
      title: '图表',
      icon: 'icon-tubiao',
      href: '/charts',
      name: 'charts'
    },
    {
      title: '记账',
      icon: 'icon-add-fill',
      href: '/tally',
      name: 'tally'
    },
    {
      title: '社区',
      icon: 'icon-shequ',
      href: '/community',
      name: 'community'
    },
    {
      title: '我的',
      icon: 'icon-wode',
      href: '/home',
      name: 'home'
    }
  ]
  return (
    <div className='nav-bar'>
      {
        Menu.map(item => 
          <NavContainer key={item.name} {...item}></NavContainer>
        )
      }
    </div>
  )
}