import React, {useEffect} from 'react';
import {IReturnInput, useInput} from '../hooks/input';
import {useAppSelector} from '../hooks/redux';
import './style.scss';
import {Alert, Box, Button, TextField, Typography} from '@mui/material';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store';
import {authSlice, login} from '../store/rest/rest.slice';
import {useNavigate} from 'react-router-dom';

export function LoginPage() {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const {isAuth, loginErrorMessage} = useAppSelector(state => state.auth)
	const username: IReturnInput = useInput('')
	const password: IReturnInput = useInput('')

	useEffect(()=>{
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])

	const SubmitHandler = async (e: any) => {
		e.preventDefault()
		try {
			if (username.value && password.value) {
				dispatch(authSlice.actions.clearLoginError())
				dispatch(login({email: username.value, password: password.value}))
			}

		} catch (error) {
			console.error('Error authentication', error as Error)
		}
	}

	return (
		!isAuth ? (
		<div className='root flex'>
			<form
				className='container mx-auto max-w-[500px] pt=8'
				onSubmit={SubmitHandler}
			>
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					maxWidth={640}
					margin='auto'
					padding={5}
					borderRadius={5}
					boxShadow={'5px 5px 10px #ccc'}
				>
					<>
						<Typography variant="h3" marginBottom={3} fontFamily='Poppins' textAlign='center'>
							Login
						</Typography>
						{loginErrorMessage && <Alert severity="error">{loginErrorMessage}</Alert>}
						<TextField id='email' {...username} margin='normal' fullWidth={true} label='Email'
						           variant='outlined' placeholder='Input email' type='email'></TextField>
						<TextField id='password' {...password} margin='normal' fullWidth={true} label='Password'
						           variant='outlined' placeholder='Input password' type='password'></TextField>

						<Button className={'mt=5'}
						        sx={{fontFamily: 'Poppins', width: '60%', margin: '0 auto', marginTop: 3}}
						        variant="contained" type='submit'>
							Login
						</Button>

						<Typography variant="body2" paddingTop={3} sx={{fontFamily: 'Poppins'}}>
							You don't have an account?<span className="incitingText">Registration</span>
						</Typography>
					</>
				</Box>
			</form>
		</div>
		): null
	)
}
