import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../features/profile/profileSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { exercisesApi } from './services/exercisesApi'
import { authApi } from './services/authApi'


export const store = configureStore({
    reducer: {
        profile: profileReducer,
        [exercisesApi.reducerPath]: exercisesApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(exercisesApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)
