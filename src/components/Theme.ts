import {createTheme } from '@mui/material';

const colorPrimary = "#fff"; //white
const colorSecondary = '#0d47a1'; //blue

export const theme = createTheme({
	palette:{
		//type:'dark',//"light", //dark
		primary:{
			light: colorPrimary,
			main: colorPrimary,
			dark: '#002884',
			contrastText: '#000',
		},
		secondary:{
			light: colorSecondary,
			main: colorSecondary,
			dark: colorSecondary,
			contrastText: '#fff',
		},
	},
	typography: {
		fontFamily: 'Raleway',
		button: {
			textTransform: 'none',
		},
	},
});

// export const useStyles = makeStyle( (theme:Theme) => {
	// tab: {
	// 	fontFamily: 'Raleway',
	// 	textTransform: 'none',
	// 	fontWeight: 700,
	// 	fontSize: '1rem',
	// },
	// button: {
	// 	outline: 'none',
	// 	borderRadius: '50px',
	// 	marginLeft: '50px',
	// 	marginRight: '25px',
	// 	fontSize: '1rem',
	// 	textTransform: 'uppercase',
	// },
	// links:{
	// 	color:"black",
	// }
// }));
