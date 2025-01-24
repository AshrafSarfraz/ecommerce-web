import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './screens/home/Home'
import Order from './screens/order/Order'
import NoPage from './screens/no-page/NoPage'
import Payment from './screens/payment/Payment'
import MyState from './context-api/MyState';
import TailwindCss from './screens/TailwindCss';

export default function App() {
  return (
  <MyState>
  <Router>
    <Routes>
      <Route path="/" element={<TailwindCss/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/*" element={<NoPage/>} />
    </Routes>
  </Router>
  </MyState>
  )
}
