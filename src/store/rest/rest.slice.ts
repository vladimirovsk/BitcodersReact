import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthPayload, IAuthState} from './auth.interface';

const ACCESS_KEY = 'bs-access-user'
const EMAIL_KEY = 'bs-email-user'

const initialState: IAuthState = {
	access_token: localStorage.getItem(ACCESS_KEY) ?? '',
	email: localStorage.getItem('email') ?? '',
	isAuth: Boolean(localStorage.getItem(ACCESS_KEY)) ?? false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action: PayloadAction<IAuthPayload>) {
			state.access_token = action.payload?.access_token
			state.email = action.payload?.email
			state.isAuth = Boolean(action.payload?.access_token)

			localStorage.setItem(ACCESS_KEY, action.payload.access_token)
			localStorage.setItem(EMAIL_KEY, action.payload.email)
		},
		logout(state){
			state.access_token=''
			state.email=''
			state.isAuth= false

			localStorage.removeItem(ACCESS_KEY)
			localStorage.removeItem(EMAIL_KEY)
		},
		register(state, action){

		}
	}
})

export const restActions = authSlice.actions
export const restReducer = authSlice.reducer
