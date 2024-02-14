import React from 'react';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks/redux';
import {authSlice} from '../../store/rest/rest.slice';
import {useDispatch} from 'react-redux';


const Header = () => {
	const {isAuth} = useAppSelector(state => state.auth)
	const leftBlock = (<div className="flex"><a href='/'><h2>Bitcoders</h2></a></div>)
	const dispatch = useDispatch()



	const LogoutHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		dispatch(authSlice.actions.logout())
	}

	return (
		<div className='bg-gray-100 flex justify-between p-4 border-2 border-gray-200'>
			{leftBlock}
			<span></span>
			<span className='font-bold'>
				{!isAuth && <Link to='/login' className='mr-2'>Login</Link>}
				{isAuth && <a href ='/' onClick={LogoutHandler}>Logout</a>}
			</span>
		</div>
	)
}

export default Header;
