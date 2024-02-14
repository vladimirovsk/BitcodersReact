import {useDispatch} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';
import {githubActions} from '../store/github/github.slice';
import {restActions} from '../store/rest/rest.slice';

const  actions = {
	...githubActions,
	...restActions
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
