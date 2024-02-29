import React, {Fragment} from 'react';
import {IReturnInput, useInput} from '../hooks/input';
import {useAppSelector} from '../hooks/redux';
import {useLoginQuery} from '../store/rest/rest.api';
import {useActions} from '../hooks/actions';
import './style.scss';
import {Box, Button, TextField, Typography} from '@mui/material';
import {useDebounce} from '../hooks/debounce';


export function LoginPage() {
	const {login} = useActions()
	const {isAuth} = useAppSelector(state => state.auth)
	const username: IReturnInput = useInput('')
	const password: IReturnInput = useInput('')

	const {data} = useLoginQuery({email: username.value, password: password.value})

	const SubmitHandler = async (e: any) => {
		e.preventDefault()
		try {
			if (data) {
				login({
						email: username.value,
						access_token: data.access_token,
					}
				)

			} else {
				console.log('Error ')
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
