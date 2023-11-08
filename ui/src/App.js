import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './components/Accounts/Login/Login';
import Signup from './components/Accounts/Signup/signup';
import Booknow from './components/Booknow/Booknow';
import Cart from './components/Cart/Cart';
import Homepage from './components/Homepage/homepage';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import DetailsProduct from "./components/product/detailsProduct";
import Profile from './components/profile/profile';
import Shop from './components/shop/Shop';
import ProtectedRoute from './userAuth';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>

        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/products/:cetegory' element={<Shop/>}/>
          <Route path='/product/:id' element={<DetailsProduct/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
         
          <Route element={<ProtectedRoute/>}>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/booknow' element={<Booknow/>}/>
            <Route path='/profile' element={<Profile/>}/>
            
          </Route>
        </Routes>

          
        <ToastContainer/>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
