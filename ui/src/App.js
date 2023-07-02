import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import { BrowserRouter  , Routes , Route } from "react-router-dom";
import Homepage from './components/Homepage/homepage';
import Shop from './components/shop/Shop';
import Booknow from './components/Booknow/Booknow';
import Details from './components/details/details'
import ProtectedRoute from './userAuth';
import Cart from './components/Cart/Cart';
import Signup from './components/Accounts/Signup/signup';
import { ToastContainer, toast } from 'react-toastify'
import Login from './components/Accounts/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>

        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
         
          <Route element={<ProtectedRoute/>}>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/booknow' element={<Booknow/>}/>
            
          </Route>
        </Routes>

          
        <ToastContainer/>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
