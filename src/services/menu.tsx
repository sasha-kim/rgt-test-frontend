import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Dish } from './types'

const API_URL= process.env.API_URL || 'http://localhost:8000'
export const menuApi = createApi({
  reducerPath: 'menuApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getMenuList: builder.query<Array<Dish>, string>({
      query: () => `dishes`,
    }),
    getOrderById: builder.query({
      query: (order) => `order/${order}`,
    }),
    makeOrder: builder.mutation({
      query: (body) => ({
        url: '/orders',
        method: 'POST',
        body,
      }),
    })
  }),
})

export const { useGetMenuListQuery, useMakeOrderMutation, useGetOrderByIdQuery } = menuApi