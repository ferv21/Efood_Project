import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurantes } from '../pages/Home'
import { CardapioItem } from '../components/CardapioLista'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurantes[], void>({
      query: () => 'restaurantes'
    }),
    getCardapio: builder.query<CardapioItem[], string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (response: any) => response.cardapio
    }),
    getBanner: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetCardapioQuery,
  useGetBannerQuery
} = api
export default api
