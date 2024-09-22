import {createApi, EndpointBuilder, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const restApi = createApi({
	reducerPath:'rest/api',
	baseQuery: fetchBaseQuery({
		baseUrl:'http://localhost:9087/api/v1/'
	}),
	endpoints: build=> ({
		getAllProjects: build.query({
			query: () => 'project'
		})
	})

})
