import {useDispatch} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';
import {authActions} from '../store/rest/auth.slice';
import {userActions} from '../store/rest/user.slice';

const  actions = {
	...authActions,
	...userActions
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
