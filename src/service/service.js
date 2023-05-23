import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pixabay.com/api/" }),
  endpoints: builder => ({
    getPhotosByCategory: builder.query({
      query: category =>
        `?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPhotosByCategoryQuery } = photosApi;
