import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints


export const imagesApi = createApi({
  reducerPath: "imagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: builder => ({
    getImagesByCategory: builder.query({
      query: (category) => `?type=${category}`,
    }),
  }),
});




// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const { useGetImagesByCategoryQuery } = imagesApi;

