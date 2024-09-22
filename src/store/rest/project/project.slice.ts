import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProject, IProjectState} from './project.interface';

const initialState: IProjectState = {
	loading: false,
	error: '',
	projects: []

}

export const projectSlice = createSlice({
	name: 'project',
	reducers: {
		fetching(state) {
			state.loading = true
		},
		fetchSuccess(state, action: PayloadAction<IProject[]>) {
			state.loading = false
			state.projects = action.payload
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.loading = false,
			state.error = action.payload.message
		}
	},
	initialState,
})

export const projectActions = projectSlice.actions
export const projectReducer = projectSlice.reducer
