//import  Login  from "./components/user/Login"
import Login from "./components/Accounts/Login/Login";
import { Outlet } from "react-router"
//import { useSelector } from "react-redux"


// this function will return true if log in else return false
export const UserAuth = () => {
    const user = localStorage.getItem("user");
    const auth = JSON.parse(user)
    if(auth && auth.name){
        return true;
    }
    else return false;
}

const ProtectedRoute = () => {
    const L =UserAuth();
   
    return L ? <Outlet/> : <Login/> 
}

export default ProtectedRoute;