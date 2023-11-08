import { apiSlice } from "./apiSlice";

const productSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({

        getProducts: builder.query({
            query:()=>'/product',
            
           
        }),
        getProductByCetegory: builder.query({
            query: (cetegory) => `/product/search/${cetegory}`
        }),
        getProductById: builder.query({
            query: (id) => `/product/${id}`
        })

    })
})

export const {
  useGetProductsQuery,
  useGetProductByCetegoryQuery,
  useGetProductByIdQuery
} = productSlice