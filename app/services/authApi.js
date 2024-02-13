import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_auth_url, api_key } from '../../firebase/database'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_auth_url }),
    endpoints: (builder) => ({
        SignUp: builder.mutation({
            query: ({ email, password }) => ({
                url: `accounts:signUp?key=${api_key}`,
                method: 'POST',
                body: { email, password }
            }),
        }),
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: `accounts:signInWithPassword?key=${api_key}`,
                method: 'POST',
                body: { email, password }
            }),
        }),
    })
})
export const { useLoginMutation, useSignUpMutation } = authApi;