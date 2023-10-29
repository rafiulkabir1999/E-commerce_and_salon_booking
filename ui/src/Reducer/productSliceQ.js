import { apiSlice } from "./apiSlice";

const productSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({

        getProducts: builder.query({
            query:()=>'/product',
           
        }),
        getProductByCetegory: builder.query({
            query: (cetegory) => `/product/search/${cetegory}`
        })

    })
})

export const {
  useGetProductsQuery,
  useGetProductByCetegoryQuery
} = productSlice