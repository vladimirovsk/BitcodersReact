import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {fetchProject} from '../store/rest/project/project.actions';

export function ProjectsPage() {
	const dispatch = useAppDispatch()

	const {error, loading, projects} = useAppSelector(state => state.project )
	const {isAuth} = useAppSelector((state) => state.auth);
	const sliderSpace = isAuth ? 'pl-28' : 'pl-8'

	console.log('PROJECTS', projects, 'error', error, 'loading', loading)
	useEffect(() => {
		dispatch(fetchProject())
	}, []);

	return (
		<div className={`flex ${sliderSpace} pt-4`}>
			{/*{*/}
			{/*	projects.map(project => {*/}
			{/*	return (*/}
			{/*	<div id={project._id}>{project.title}</div>*/}
			{/*	)*/}
			{/*	})*/}
			{/*}*/}
		</div>
	)
}
