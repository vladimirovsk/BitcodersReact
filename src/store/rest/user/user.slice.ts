import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	email: ''
}
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {

	}
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
