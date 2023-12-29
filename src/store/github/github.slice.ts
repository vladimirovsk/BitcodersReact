import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const LS_FAVORITE_KEY = 'rfk'

interface IGithubState {
	favorites: string[]
}

const initialState: IGithubState = {
	favorites: JSON.parse(localStorage.getItem(LS_FAVORITE_KEY) ?? '[]')
}

export const githubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {
		addFavourite(state, action: PayloadAction<string>) {
			state.favorites.push(action.payload)
			localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(state.favorites))
		},
		removeFavourite(state, action: PayloadAction<string>) {
			state.favorites = state.favorites.filter((f) => f !== action.payload)
			localStorage.setItem(LS_FAVORITE_KEY, JSON.stringify(state.favorites))
		}
	}
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer