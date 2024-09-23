import React, {useState} from 'react';
import { RxPerson } from 'react-icons/rx';
import { FaRegStar, FaGithub } from "react-icons/fa";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks/redux';


const Sidebar = () => {
	const [selectedButton, setSelectedButton] = useState<string>('favorites');
	const {isAuth} = useAppSelector(state => state.auth)

	const handleButtonClick = (buttonName: string) => {
		setSelectedButton(buttonName);
	};

	const setupClassNameForButton = (buttonName:string) => {
		return `${
			selectedButton === buttonName
				? 'bg-blue-500 text-white'
				: 'bg-gray-100 hover:bg-gray-200'
		} cursor-pointer my-4 p-3 rounded-lg inline-block`
	}

		if (0>1) {//isAuth) {
			return (
				<div className='flex'>
					<div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
						<div className='flex flex-col items-center'>
							<Link to='/favorites'>
								<div
									className={setupClassNameForButton('favorites')}
									onClick={() => handleButtonClick('favorites')}>
									<FaRegStar size={20}/>
								</div>
							</Link>
							<span className='border-b-[1px] border-gray-200 w-full p-2'></span>
							<Link to='/'>
								<div
									className={setupClassNameForButton('home')}
									onClick={() => handleButtonClick('home')}>
									<FaGithub size={20}/>
								</div>
							</Link>
							<Link to='/users'>
								<div
									className={setupClassNameForButton('users')}
									onClick={() => handleButtonClick('users')}>
									<RxPerson size={20}/>
								</div>
							</Link>
							<Link to='/projects'>
								<div
									className={setupClassNameForButton('projects')}
									onClick={() => handleButtonClick('projects')}>
									<HiOutlineShoppingBag size={20}/>
								</div>
							</Link>
							<span className='border-b-[1px] border-gray-200 w-full p-2'></span>
							<Link to='/setup'>
								<div
									className={setupClassNameForButton('setup')}
									onClick={() => handleButtonClick('setup')}>
									<FiSettings size={20}/>
								</div>
							</Link>
						</div>
					</div>
				</div>
			);
		} else {
			return (<></>)
		}
};

export default Sidebar;
