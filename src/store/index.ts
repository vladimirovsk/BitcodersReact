import {configureStore} from '@reduxjs/toolkit'
import {githubApi} from './github/github.api';
import {setupListeners} from '@reduxjs/toolkit/query'
import {githubReducer} from './github/github.slice';
// import {restApi} from './rest/rest.api';
import {restReducer} from './rest/rest.slice';

export const store = configureStore({
	reducer: {
		[ githubApi.reducerPath ]: githubApi.reducer,
		// [ restApi.reducerPath ]: restApi.reducer,
		github: githubReducer,
		auth: restReducer,

	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware)
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


