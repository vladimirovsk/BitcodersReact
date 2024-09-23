import {useDispatch} from 'react-redux';
import {bindActionCreators} from '@reduxjs/toolkit';
import {authActions} from '../store/rest/auth/auth.slice';
import {userActions} from '../store/rest/user/user.slice';
import {projectActions} from '../store/rest/project/project.slice';

const  actions = {
	...authActions,
	...userActions,
	...projectActions,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
