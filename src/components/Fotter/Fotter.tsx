import React from "react";
import {Link, Typography} from '@mui/material'
import './styles.css';

const Footer = () => {
	return (
		<footer className={'footer'}>
			<Typography className={'footer'} variant="body2" color="textSecondary" align="center">
				<span>{' © '}</span>
				<Link color="inherit" href="/">s.vladimirov</Link>{' '}
					{new Date().getFullYear()}
			</Typography>
		</footer>
		)
	}

export default Footer;
