import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../features/profile/profileSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { exercisesApi } from '../services/exercisesApi'


export const store = configureStore({
    reducer: {
        profile: profileReducer,
        [exercisesApi.reducerPath]: exercisesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(exercisesApi.middleware),
})

setupListeners(store.dispatch)
