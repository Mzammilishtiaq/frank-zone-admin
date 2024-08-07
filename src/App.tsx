import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import AppRouting from './AppRouting'

function App() {

  return (
    <div className="App">
      <AppRouting />
      <ToastContainer />
    </div>
  )
}

export default App
