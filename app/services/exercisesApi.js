import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/database'

// Define a service using a base URL and expected endpoints
export const exercisesApi = createApi({
    reducerPath: 'exerciseApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getExercises: builder.query({
            query: () => `ejercicios.json`,
        }),
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetExercisesQuery } = exercisesApi