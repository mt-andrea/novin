import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Home from './pages/Home'
import Costumers from './pages/Costumers'
import Items from './pages/Items'
import Login from './pages/Login'
import Reg from './pages/Reg'
import style from '../util/style'


const App = () => {
  return (
    <Router>
      <Header />
      <div style={style.content}>
      <Routes>
        <Route path='/registration' element={<Reg />} />
        <Route path='/' exact element={<Login />} />
        <Route path='/costumers' element={<Costumers />} />
        <Route path='/items' element={<Items />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App