import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { buildUrl } from '../../shared/consts/common';

import { BASE_URL } from '../../shared/consts/baseUrl';

export const apiSlice = createApi({
	reducerPath: 'api',

	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

	tagTypes: ['Product'],

	endpoints: builder => ({
		getProduct: builder.query({
			query: ({ id }) => `/products/${id}`,

			providesTags: ['Product'],
		}),

		getProducts: builder.query({
			query: params => buildUrl('/products/', params),

			providesTags: ['Product'],
		}),
	}),
});

export const { useGetProductQuery, useGetProductsQuery } = apiSlice;
