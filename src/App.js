import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Menu from './component/Menu'
import Home from './component/Home'
import Create from './component/Create'
import Update from './component/Update'
import Pnf from './component/Pnf'


function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path={`/`} element={<Home/>} />
        <Route path={`/create`} element={<Create/>} />
        <Route path={`/update/:id`} element={<Update/>} />
        <Route path={`/*`} element={<Pnf/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

