import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes(){

   
    const isLoggedIn = useSelector(
        (state) => state.users.isLoggedIn
        )
    
    return(
       
        isLoggedIn != true ? <Navigate to="/signin" />:
        <Outlet/>
    )
}
 