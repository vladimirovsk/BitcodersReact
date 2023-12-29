import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { GithubResponse, IUser} from '../../models/github.models';

export const githubApi = createApi({
	reducerPath: 'github/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/',
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		searchUsers: build.query<IUser[], string>({
			query: (search: string)=> ({
				url: 'search/users',
				params: {
					q: search,
					per_page: 10
				}
			}),
			transformResponse: (response: GithubResponse<IUser> ) => response.items
		}),
		getUserReport: build.query<any, string>({
			query: (userName: string)=>({
				url: `users/${userName}/repos`
			})
		})
	})
})

export const {useSearchUsersQuery, useLazyGetUserReportQuery} = githubApi