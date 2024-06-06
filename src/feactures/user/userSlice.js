import { createSlice } from '@reduxjs/toolkit'
import { usuarios } from '../../data/datos'


const initialState = {
    value: null
}


const userSlice = createSlice({
    name: "users",
    initialState,
    reducers : {
        login: (state,action) => {
            const found = usuarios.find(e => e.username === action.payload.name)
            if(found && found.password === action.payload.password){
                state.value = found
            }else{
               alert("Usurio o contraseña incorrecto !")
            }

        },

        logout: (state) => {
            state.value =  null
        }
    }
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer