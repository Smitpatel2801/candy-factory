import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const candyTypeSlice = createApi({
  reducerPath: "candyType",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000",
  }),
  tagTypes: ["CandyType"],
  endpoints: (builder) => ({
    getCandyType: builder.query({
      query: () => "/candy",
      providesTags: [{ type: "CandyType", id: "orderItem" }],
    }),
    addCandyType: builder.mutation({
        query: (candyData) => {
          console.log(candyData);
          return {
            url: "/candy",
            method: "POST",
            body: candyData,
          };
        },
        invalidatesTags: [
          { type: "CandyType", id: "candyTypeItem" },
        ],
      }),
  }),
});

export const {
  useAddCandyTypeMutation,
  useGetCandyTypeQuery,
} = candyTypeSlice;

export const orderReducer = candyTypeSlice.reducer;