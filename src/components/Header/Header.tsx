import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/redux';
import {authSlice} from '../../store/rest/auth.slice';
import {useDispatch} from 'react-redux';
import {Button, Tab, Tabs} from '@mui/material';
import {pages} from '../../pages';


const Header = () => {
	const navigate = useNavigate();
	const {isAuth} = useAppSelector(state => state.auth)
	const leftBlock = (<div className="flex"><a href='/'><h2>IT CODER</h2></a></div>)
	const dispatch = useDispatch()
	const [tabIndex, setTabIndex] = React.useState(0);

	const handlerLogout = () => {
		// event.preventDefault();
		dispatch(authSlice.actions.logout())
	}

	const handlerLogin = () => {
		navigate('one', { replace: false });
	};

	const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabIndex(newValue);
	};

	useEffect(() => {
		switch (tabIndex) {
			case 0:
				navigate(pages.home)
				break;
			case 1:
				navigate(pages.projects)
				break;
			case 2:
				navigate(pages.about)
				break;
			default:
				break;
		}
	}, [tabIndex]);

	return (
		<div className='flex justify-between p-4 border-2 border-gray-200'>
			{leftBlock}
			<span></span>
				<Tabs
					// className={classes.tabContainer}
					value={tabIndex}
					onChange={handleTabsChange}
					scrollButtons="auto"
					// indicatorColor="secondary"
					// textColor="secondary"
					indicatorColor="secondary"
					// aria-label="secondary tabs example"
				>
                    <Tab value={0} label="Home"/>
                    <Tab value={1} label="Projects"/>
                    <Tab value={2} label="About"/>
				</Tabs>
			<span className='font-bold'>
				{!isAuth && <Button variant="outlined" className={'button-login'} onClick={handlerLogin}>Login</Button>}
				{isAuth &&  <Button variant="outlined"  className={'button-logout'} onClick={handlerLogout}>Logout</Button>}
		</span>
</div>
)
}

export default Header;
