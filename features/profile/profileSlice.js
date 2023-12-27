import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({

    name: "profile",
    initialState: {
        nombre: 'Lucas',
        apellido: 'Almiron',
        edad: 0
    },
    reducers: {
        reemplazarNombre: (state, action) => {
            state.nombre = action.payload
        },
        reemplazarApellido: (state, action) => {
            state.apellido = action.payload
        },
        reemplazarEdad: (state, action) => {
            state.edad = action.payload
        }
    }
})

export const { reemplazarNombre, reemplazarApellido, reemplazarEdad } = profileSlice.actions

export default profileSlice.reducer