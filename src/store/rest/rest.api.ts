import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AuthData, AuthResponse} from './auth.interface';

export const restApi = createApi({
	reducerPath: 'api/v1',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:9087/api/v1',
	}),
	endpoints: build => ({
		login:  build.query<AuthResponse, AuthData>({
			query: (body:AuthData)=> ({
				url: 'auth/login',
				method: 'POST',
				body
			})
		})
	})
})

export const {useLazyLoginQuery, useLoginQuery} = restApi
