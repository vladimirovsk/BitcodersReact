import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/redux';
import {authSlice} from '../../store/rest/auth.slice';
import {useDispatch} from 'react-redux';
import {Button} from '@mui/material';


const Header = () => {
	const navigate = useNavigate();
	const {isAuth} = useAppSelector(state => state.auth)
	const leftBlock = (<div className="flex"><a href='/'><h2>Bitcoders</h2></a></div>)
	const dispatch = useDispatch()



	const handlerLogout = () => {
		// event.preventDefault();
		dispatch(authSlice.actions.logout())
	}

	const handlerLogin = () => {
		navigate('one', { replace: false });
	};

	return (
		<div className='flex justify-between p-4 border-2 border-gray-200'>
			{leftBlock}
			<span></span>
			<span className='font-bold'>
				{!isAuth && <Button variant="outlined" className={'button-login'} onClick={handlerLogin}>Login</Button>}
				{isAuth &&  <Button variant="outlined"  className={'button-logout'} onClick={handlerLogout}>Logout</Button>}
		</span>
</div>
)
}

export default Header;
