import React from 'react';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks/redux';

const Header = () => {
	const {isAuth}  =  useAppSelector(state=>state).auth
	const leftBlock = (<div className="flex"><h2>User Name</h2></div>)
	return (
		<div className='bg-gray-100 flex justify-between p-4 border-2 border-gray-200'>
			{leftBlock}
			<span>Auth: {JSON.stringify(isAuth)}</span>
			<span>
				<Link to='/login' className='mr-2'>Login</Link>
			</span>
		</div>
	)
}

export default Header;
