import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {authReducer} from './rest/auth/auth.slice';
import {userReducer} from './rest/user/user.slice';
import {projectReducer} from './rest/project/project.slice';


export const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		project: projectReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


