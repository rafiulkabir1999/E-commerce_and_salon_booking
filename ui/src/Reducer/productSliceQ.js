import { apiSlice } from "./apiSlice";

const productSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({

        getProducts: builder.query({
            query:()=>'/product',
           
        }),

    })
})

export const {
  useGetProductsQuery
} = productSlice