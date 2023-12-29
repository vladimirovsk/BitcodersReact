import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
	const leftBlock = (<div className="flex"><h2>Test UserName</h2></div>)
	return (
		<div className='bg-gray-100 flex justify-between p-4 border-2 border-gray-200'>
			{leftBlock}
			<span>
				<Link to='/' className='mr-2'>Home</Link>
				<Link to='/favorites'>Favorites</Link>
			</span>
		</div>
	)
}

export default Header;