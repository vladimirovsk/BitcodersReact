import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { IAuthState} from './auth.interface';
import axios, {AxiosError} from 'axios';

const ACCESS_KEY = 'bs-access-user'
const EMAIL_KEY = 'bs-email-user'

const initialState: IAuthState = {
	access_token: localStorage.getItem(ACCESS_KEY) ?? '',
	email: localStorage.getItem('email') ?? '',
	isAuth: Boolean(localStorage.getItem(ACCESS_KEY)) ?? false
}

export const login = createAsyncThunk('auth/login',
	async (params: {email: string, password: string}) => {
		try {
			const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
				email: params.email,
				password: params.password
			})
			return data
		} catch (e) {
			if (e instanceof AxiosError){
				throw new Error(e.response?.data.message)
			}
		}
	}
)
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout(state){
			state.access_token=''
			state.email=''
			state.isAuth= false

			localStorage.removeItem(ACCESS_KEY)
			localStorage.removeItem(EMAIL_KEY)
		},
		clearLoginError: (state) => {
			state.loginErrorMessage = undefined
		},

		register(state, action){

		}
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action)=>{
			if (!action.payload) return
			state.access_token = action.payload.access_token
			state.email = action.payload?.email
			state.isAuth = Boolean(action.payload?.access_token)

			localStorage.setItem(ACCESS_KEY, action.payload.access_token)
			localStorage.setItem(EMAIL_KEY, action.payload.email)
		})

		builder.addCase(login.rejected, (state, action)=>{
			state.loginErrorMessage = action.error.message
		})
	}
})

export const restActions = authSlice.actions
export const restReducer = authSlice.reducer
