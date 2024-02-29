import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AuthData, AuthResponse} from './auth.interface';
import * as process from 'process';

export const restApi = createApi({
	reducerPath: 'api/v1',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL //'https://api-rest.bitcoders.net/api/v1',
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
