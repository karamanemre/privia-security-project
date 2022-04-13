import React from 'react'
import { Route, Routes } from 'react-router'
import CustomersPage from '../pages/CustomersPage'
import HomePage from '../pages/HomePage'
import PricingPage from '../pages/PricingPage'
import ResourcesPage from '../pages/ResourcesPage'

function Dashboard() {
  return (
    <div className=''>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route exact path='/pricing' element={<PricingPage/>} />
            <Route exact path='/resources' element={<ResourcesPage/>} />
            <Route exact path='/customers' element={<CustomersPage/>} />
        </Routes>
    </div>
  )
}

export default Dashboard