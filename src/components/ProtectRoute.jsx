import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"



export const ProtectRouter = ({children}) => {

    const user = useSelector(state => state.user.value)

    if(!user){
        return <Navigate to={"/"} />
    }
    return <Outlet />
}