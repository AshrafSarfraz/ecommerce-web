import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './screens/home/Home'
import Order from './screens/order/Order'
import NoPage from './screens/no-page/NoPage'
import Payment from './screens/payment/Payment'
import MyState from './context-api/MyState';
import Login from './screens/admin/login/Login';
import Signup from './screens/admin/sign-up/SignUp';

export default function App() {
  return (
  <MyState>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/*" element={<NoPage/>} />
    </Routes>
  </Router>
  </MyState>
  )
}
