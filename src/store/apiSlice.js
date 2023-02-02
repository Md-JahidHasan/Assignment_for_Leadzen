import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseURI = 'https://jsonplaceholder.typicode.com'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
    endpoints: builder=>({
        getPersons: builder.query({

            // get data from 'https://jsonplaceholder.typicode.com/users'
            query: () =>'/users'
        })
    })
})

export default apiSlice;