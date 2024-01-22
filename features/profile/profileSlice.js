import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({

    name: "profile",
    initialState: {
        nombre: 'Lucas',
        apellido: 'Almiron',
        edad: 0,
        foto: null
    },
    reducers: {
        reemplazarNombre: (state, action) => {
            state.nombre = action.payload
        },
        reemplazarApellido: (state, action) => {
            state.apellido = action.payload
        },
        reemplazarFoto: (state, action) => {
            state.foto = action.payload
        },
        reemplazarEdad: (state, action) => {
            state.edad = action.payload
        }
    }
})

export const { reemplazarNombre, reemplazarApellido, reemplazarFoto, reemplazarEdad } = profileSlice.actions

export default profileSlice.reducer