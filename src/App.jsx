import React, { use, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'

const App = () => {
  useEffect(() => {
    setLocalStorage()
  },)
     

  return (
    <>
    <Login/>
    {/*<EmployeeDashboard/>*/}
    {/*<AdminDashboard/> */}
    </>
  )
}

export default App