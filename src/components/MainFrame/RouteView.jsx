import React from 'react'
import BillDetail from '../BillDetail/BillDetail.jsx'
import DataCharts from '../DataCharts/DataCharts.jsx'
import MyHome from '../MyHome/MyHome.jsx'
import DropCommunity from '../DropCommunity/DropCommunity.jsx'
import { Route } from 'react-router-dom'

export default function RouterView() {
  const routerConfig = [
    {
      path: '/detail',
      component: BillDetail
    },
    {
      path: '/charts',
      component: DataCharts
    },
    {
      path: '/home',
      component: MyHome
    },
    {
      path: '/community',
      component: DropCommunity
    }
  ]
  return (
    <div>
      {
        routerConfig.map(item => <Route key={item.path} path={item.path} component={item.component}></Route>)
      }
    </div>
  )
}