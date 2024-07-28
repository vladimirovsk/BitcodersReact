import React from 'react';
import {useAppSelector} from '../hooks/redux';

export function AboutPage() {
	const {isAuth} = useAppSelector((state) => state.auth);
	const sliderSpace = isAuth ? 'pl-28' : 'pl-8'

	return (
		<div className={`flex ${sliderSpace} pt-4`}>
			About page
		</div>
	)
}
