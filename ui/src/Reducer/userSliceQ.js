import { apiSlice } from "./apiSlice";

const userSliceQ = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        login:builder.mutation({
           query:(data)=>({
               url:'/user/login',
               method:'post',
               body:data
           })
        }),
        
        logout:builder.mutation({
            query: () => ({
                url: '/user/logout',
                method: 'get'
            })
        }),
    })
})

export const {
    useLoginMutation,
    useLogoutMutation,
    
} = userSliceQ