import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	user: {},
	isLogged: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {

	}
})
