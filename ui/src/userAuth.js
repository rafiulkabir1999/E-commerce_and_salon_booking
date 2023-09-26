//import  Login  from "./components/user/Login"
import Login from "./components/Accounts/Login/Login";
import { Outlet } from "react-router"
//import { useSelector } from "react-redux"
import { useCookies } from "react-cookie";

// this function will return true if log in else return false
export const UserAuth = () => {
    //const user = localStorage.getItem("user");
   const [cookies,setCookies] = useCookies(['access_token'])
    console.log(cookies)
    if(cookies.access_token){
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