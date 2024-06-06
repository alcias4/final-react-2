import { useDispatch, useSelector } from "react-redux";
import { login } from "../feactures/user/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export const Login = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.value)
    const navigate = useNavigate()


    const handelSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user  ={
            name: form.elements.name.value,
            password: form.elements.password.value
        }
        
        dispatch(login(user))
    }

    useEffect(()=> {
        if(user){
            navigate("/perfil")
        }else {
            navigate("/login")
        }
    },[user])

    return (
        <form onSubmit={handelSubmit}>
            <h2>Iniciar session</h2>
            <p>Perfil de prueba : admin, admin</p>
            <input type="text" name="name"  placeholder="usuario"/>
            <input type="text" name="password"  placeholder="Contraseña"/>
            <button>Login</button>
        </form>
    )
}