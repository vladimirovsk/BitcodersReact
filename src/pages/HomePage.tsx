import React, {useEffect, useState} from 'react';
import {useSearchUsersQuery, useLazyGetUserReportQuery} from '../store/github/github.api';
import {useDebounce} from '../hooks/debounce';
import {IRepository} from '../models/github.models';
import {RepoCard} from '../components/RepoCard/RepoCard';

export function HomePage() {
	const [search, setSearch] = useState('')
	const debounce = useDebounce(search)
	const [dropdown, setDropdown] = useState(false)

	const {isLoading, isError, data} = useSearchUsersQuery(debounce, {
		skip: debounce.length<4,
		refetchOnFocus: true,
	})

	const [fetchRepos, {isLoading: isReposLoading, data: repos}] = useLazyGetUserReportQuery()

	useEffect(()=>{
		setDropdown(debounce.length>3 && data?.length!>0)
	}, [debounce, data])

	const clickHandler = (userName: string)=> {
		fetchRepos(userName)
		setDropdown(false)
	}

 	return (
	    <div className='flex pl-28 pt-4'>
		    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
			    {isError && <p className='text-red-600 text-center'>Something wrong error...</p>}
			    <div className='relative w-[560px]'>
				    <input
					    type='text'
					    className='border py-2 px-4 w-full h-[42px] mb-2'
					    placeholder='Search for github username'
					    value={search}
					    onChange={e => setSearch(e.target.value)}
				    />
				    {dropdown && <ul
									    className='list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white'>
					    {isLoading && <p className='text-center'>Loading</p>}
					    {data?.map(user => (
						    <li
							    key={user.id}
							    className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-color cursor-pointer'
							    onClick={() => clickHandler(user.login)}
						    >
							    {user.login}
						    </li>
					    ))
					    }
								    </ul>
				    }
				    <div className='container'>
					    {isReposLoading && <p className='text-center'>Repos are loading...</p>}
					    {repos?.map((repo: IRepository) => <RepoCard repo={repo} key={repo.id}/>)}
				    </div>
			    </div>
		    </div>
	    </div>
    )
}