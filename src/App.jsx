import React from 'react'
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import Home from './screens/home/Home'
import Order from './screens/order/Order'
import NoPage from './screens/no-page/NoPage'
import Payment from './screens/payment/Payment'
import MyState from './context-api/MyState';
import Login from './screens/admin/login/Login';
import Signup from './screens/admin/sign-up/SignUp';
import ProductInfo from './screens/product-info/ProductInfo';
import Cart from './screens/cart/Cart';
import Dashboard from './screens/admin/dashboard/Dashboard';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import AddProduct from './screens/admin/pages/Addproduct';
import UpdateProduct from './screens/admin/pages/UpdateProduct';

export default function App() {
  return (
  <Provider store={store}>
  <MyState>
  <Router>
    <Routes>
      <Route path="/"                 element={<Home/>} />
      <Route path="/login"            element={<Login/>} />
      <Route path="/signUp"           element={<Signup/>} />
      <Route path="/dashboard"        element={<AdminProtectedRoutes>     <Dashboard/>     </AdminProtectedRoutes>}/>
      <Route path="/addproduct"       element={<AdminProtectedRoutes>     <AddProduct/>    </AdminProtectedRoutes>}/>
      <Route path="/updateproduct"    element={<AdminProtectedRoutes>     <UpdateProduct/> </AdminProtectedRoutes>}/>
      <Route path="/cart"             element={<ProtectedRoutes>          <Order/>         </ProtectedRoutes>} />
      <Route path="/productInfo/:id"  element={<ProductInfo/>} />
      <Route path="/order"            element={<Cart/>} />
      <Route path="/payment"          element={<Payment/>} />
      <Route path="/*"                element={<NoPage/>} />
    </Routes>
  </Router>
  </MyState>
  </Provider>
  )
}


export const ProtectedRoutes=({children})=>{
  const user=localStorage.getItem('user')
  if(user){
  return children;
}else{
  return <Navigate to="/login" replace={true} />
}
}

export const AdminProtectedRoutes=({children})=>{
  const Admin= JSON.parse(localStorage.getItem('user'))
  if(Admin.user.email==="ashrafq952@gmail.com"){
      return children;
  }else{
    return <Navigate to="/login" replace={true} />
  }
  }