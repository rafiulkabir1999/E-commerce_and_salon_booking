//import  Login  from "./components/user/Login"
import { useSelector } from "react-redux";
import Login from "./components/Accounts/Login/Login";
import { Outlet } from "react-router"
//import { Cookies, useCookies } from "react-cookie";

// this function will return true if log in else return false
export const UserAuth = () => {
    //const user = JSON.parse(localStorage.getItem("userinfo"));
    //console.log(localStorage.getItem('userinfo'))
    const user = useSelector(state => state.authSlice.userinfo)
  //console.log(user)
   
    if(user && user.name){
        return true;
    }
    else return false;
}

// const AdminAuth = () => {
//     const
// }

const ProtectedRoute = () => {
    const L =UserAuth();
   
    return L ? <Outlet/> : <Login/> 
}



export default ProtectedRoute;