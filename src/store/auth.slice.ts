import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const ACCESS_TOKEN = 'bs-access-user'
const EMAIL_KEY = 'bs-email-user'

interface AuthState {
	access_token:string;
	email: string;
	isAuth:boolean
}

interface AuthPayload {
	email:string,
	access_token: string
}


const initialState: AuthState = {
	access_token: localStorage.getItem(ACCESS_TOKEN) ?? '',
	email: localStorage.getItem(EMAIL_KEY) ?? '',
	isAuth: Boolean(localStorage.getItem(ACCESS_TOKEN) ) ?? false
}


export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers:{
		login (state, action: PayloadAction<AuthPayload>){
			state.access_token = action.payload.access_token
			state.email = action.payload.email
			state.isAuth = Boolean(action.payload.access_token)

			localStorage.setItem(ACCESS_TOKEN, action.payload.access_token)
			localStorage.setItem(EMAIL_KEY, action.payload.email)
		}
	}
})

export default authSlice.reducer

