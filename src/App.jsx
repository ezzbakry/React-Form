import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/Navbar/Navbar'
import Login from './components/Form/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Login></Login>

    </>
  )
}

export default App
