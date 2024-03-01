import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {restReducer} from './rest/auth.slice';

export const store = configureStore({
	reducer: {
		auth: restReducer,

	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


