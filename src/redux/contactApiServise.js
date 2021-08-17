import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://60ae1fea80a61f00173327f3.mockapi.io/',
  }),
  tagTypes: ['contact'],
  keepUnusedDataFor: 30,
  endpoints: builder => ({
    getContact: builder.query({
      query: () => 'contacts',
      providesTags: ['contact'],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['contact'],
    }),
    addContact: builder.mutation({
      query(body) {
        return {
          url: 'contacts',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['contact'],
    }),
  }),
});

export const {
  useGetContactQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactApi;
