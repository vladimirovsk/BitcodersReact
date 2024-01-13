import React from 'react';
import {IReturnInput, useInput} from '../hooks/input';

export function LoginPage() {
	const submitHandler = (event: React.FormEvent)=>{
		event.preventDefault()

	}

	const username:IReturnInput = useInput('')
	const password:IReturnInput = useInput('')


	return (
		<div className='flex pl-28 pt-4'>
			<form
				className='container mx-auto max-w-[500px] pt=8'
				onSubmit={submitHandler}
			>
				<div className='container mb-2'>
					<label htmlFor='username' className='block'>User Name</label>
					<input type='text' {...username} id='username' className='border py-1 px2 w-full'/>
				</div>
				<div className='container'>
					<label htmlFor='password' className='block'>Password</label>
					<input type='password' {...password} id='password' className='border py-1 px2 w-full'/>
				</div>
				<button className='mt-4 py-2 px-4 bg-blue-600 border text-center text-white'>Login</button>
			</form>
		</div>
	)
}
