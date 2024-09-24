import axios from '../../../hooks/axios';
import {AppDispatch} from '../../index';
import {projectSlice} from './project.slice';
import {IProject} from './project.interface';
import {ServerResponse} from '../../../models/github.models';


export const fetchProject = () => {
	return async (dispatch: AppDispatch)=> {
		try {
			dispatch(projectSlice.actions.fetching())
			const res = await axios.get<ServerResponse<IProject>>('project')
			console.log('RES', res)
			dispatch(projectSlice.actions.fetchSuccess(res.data.result))
		} catch (err) {
			dispatch(projectSlice.actions.fetchError(err as Error))
		}
	}
}
