import {createApi, EndpointBuilder, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
	reducerPath: 'bitcoders/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://localhost/',
	}),
	endpoints: build => ({
		searchUsers: build.query({
			query: ()=> ({
				url: 'search/users'
			})
		})
	})
})