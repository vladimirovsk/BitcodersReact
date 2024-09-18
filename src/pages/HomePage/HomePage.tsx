import React from 'react';
import {useAppSelector} from '../../hooks/redux';
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
	Container,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Typography
} from '@mui/material';
import clsx from "clsx";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import ScrollAnimation from 'react-animate-on-scroll';
import LaptopITService from './img/laptopItservis.jpg';
import imgDatabase from './img/database.jpg';
import imgServer from './img/servers.jpg';
import imgRest from './img/REST.jpeg';
import imgWebDev from './img/webdev.jpg';
import imgFlutter from './img/flutter.png';
import imgNodeJs from './img/nodejs.png';
import imgReactJs from './img/react.png';

import './styles.css'
import 'animate.css/animate.compat.css'

interface ICards {
	id: string,
	title: string,
	text: string,
	img: string
}

interface IFrameworks {
	name: string
}

interface ISkills {
	id: string,
	title: string,
	subheader: string,
	img: string,
	expanded: boolean,
	hidden: boolean,
	disabled: boolean,
	frameworks: IFrameworks[]
}

export function HomePage() {
	const {isAuth} = useAppSelector((state) => state.auth);
	const sliderSpace = isAuth ? 'pl-28' : 'pl-8'
	const imageUrl = `url(${LaptopITService})`;

	const [expanded0, setExpanded0] = React.useState(false);
	const [expanded1, setExpanded1] = React.useState(false);
	const [expanded2, setExpanded2] = React.useState(false);

	const cards: ICards[] = [
		{
			id: "1",
			title: "Database Development",
			text: 'One of the main areas of my work is the development of databases and database management systems . I have extensive experience with databases of various architectures such as MySQL, MSSQL, Interbase, Firebird, PostgreSQL, and MongoDB. My skills include database design, optimization, and management, as well as database security and high availability.',
			img: imgDatabase
		},
		{
			id: "2",
			title: "home.modul1.cards.card2.header",
			text: "home.modul1.cards.card2.text",
			img: imgServer
		},
		{
			id: "3",
			title: "home.modul1.cards.card3.header",
			text: "home.modul1.cards.card3.text",
			img: imgRest
		},
		{
			id: "4",
			title: "home.modul1.cards.card4.header",
			text: "home.modul1.cards.card4.text",
			img: imgWebDev
		}
	];
	const skills: ISkills[] = [
		{
			id: '0',
			title: 'Flutter',
			subheader: 'Mobile development',
			img: imgFlutter,
			expanded: expanded0,
			hidden: false,
			disabled: false,
			frameworks: [
				{name: "Dart"}
			]
		},
		{
			id: '1',
			title: 'NodeJS',
			subheader: 'Backend Api',
			img: imgNodeJs,
			expanded: expanded1,
			hidden: false,
			disabled: false,
			frameworks: [
				{name: "Dart"}
			]
		},
		{
			id: '2',
			title: 'ReactJS',
			subheader: 'Web development',
			img: imgReactJs,
			expanded: expanded2,
			hidden: false,
			disabled: false,
			frameworks: [
				{name: "Dart"}
			]
		}
	]

	const handleExpandClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

		switch (parseInt(event.currentTarget.id)) {
			case 0:
				setExpanded0(!expanded0);
				break;
			case 1:
				setExpanded1(!expanded1);
				break;
			case 2:
				setExpanded2(!expanded2);
				break;
			default:
				console.log('Not find id element: ' + event.currentTarget.id);
		}
	};

	return (
		<React.Fragment>
			<Paper className={'mainFuturePost'}
			       style={{backgroundImage: imageUrl}}>
				<Container fixed>
					<div className='overlay'/>
					<Grid container>
						<Grid item md={6}>
							<div className={'mainFuturePostContent'}>
								<Typography variant="h3" component="h1" color="inherit">
									Software development
								</Typography>
								<Typography variant="h6" component="h2" color="inherit" paragraph>
									Application and database architecture development
								</Typography>
							</div>
						</Grid>
					</Grid>
				</Container>
			</Paper>
			<div>
				<Container maxWidth='md'>
					<Typography variant='h3' textAlign='center' color='textPrimary' gutterBottom
					            align="center">Main</Typography>
					<Typography variant='h5' textAlign='center' color='textSecondary' gutterBottom align="center"
					            paragraph>direction of development</Typography>
				</Container>
			</div>

			<Container className={'cardGrid'}>
				<Grid container spacing={2} justifyContent={'center'}>
					{cards.map((card) => (
						<Grid item key={card.id} xs={12} md={6} lg={3}>
							<Card className={'cardItem'}>
								<CardMedia
									className={'cardMedia'}
									image={card.img}
									title={card.title}
								/>
								<CardContent className={'cardContext'}>
									<Typography variant="h5" gutterBottom align='center'>
										{card.title}
									</Typography>
									<Typography paragraph gutterBottom align='justify'>
										{card.text}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>

			<div className={'mainContent bg-gray-50'}>
				<Container maxWidth='md' style={{paddingTop: '2em'}}>
					<Typography variant='h3' color='textPrimary' gutterBottom
					            align="center">Skills</Typography>
					<Typography variant='h5' color='textSecondary' gutterBottom align="center"
					            paragraph>Programming languages and development environments</Typography>
				</Container>
			</div>

			<Container className={'cardGridSkill'}>
				<Grid container spacing={2} justifyContent={'center'}>
					{skills.map((skill) => (
						<Grid item key={skill.id} xs={12} sm={6} md={4} lg={3} xl={3}>
							<Card className={'cardItemSkill'}>
								<CardHeader
									avatar={
										<ScrollAnimation animateIn='animate__swing'>
											<Avatar aria-label="recipe" className={'avatar'} src={skill.img}/>
										</ScrollAnimation>
									}
									title={skill.title}
									subheader={skill.subheader}
								/>
								<CardActions disableSpacing style={{margin: '0', padding: '0'}}>
									<IconButton
										id={skill.id}
										className={clsx('expand', {'expandOpen': skill.expanded})}
										onClick={handleExpandClick}
										aria-expanded={skill.expanded}
										aria-label="show more"
										hidden={skill.hidden}
										disabled={skill.disabled}
									>
										<ExpandMoreIcon/>
									</IconButton>
								</CardActions>
								<Collapse in={skill.expanded} timeout="auto" unmountOnExit>
									<CardContent className={'CardContentSkills'}>
										<List key={'list_' + skill.id} >
											{skill.frameworks.map(framework => (
												<ListItem key={'list_item' + framework.name}
												          button dense={true}>
													<ListItemIcon
														key={'list_item_icon' + framework.name}><CheckIcon/></ListItemIcon>
													<ListItemText key={'list_item_text' + framework.name}>
														{framework.name}
													</ListItemText>
												</ListItem>
											))}
										</List>
									</CardContent>
								</Collapse>
							</Card>
						</Grid>

					))}
				</Grid>
			</Container>

		</React.Fragment>
	)
}

//
// Одним из основных направлений моей работы является разработка баз данных и систем управления базами данных (СУБД). Я обладаю обширным опытом работы с базами данных различных архитектур, таких как MySQL, MSSQL, Interbase, Firebird, PostgreSQL, и MongoDB. Мои навыки включают проектирование, оптимизацию и управление базами данных, а также обеспечение их безопасности и высокой доступности.
// Репликация, стратегии резервного копирования, что позволяет обеспечивать надежность и доступность данных. Проектирование баз данных,  управление хранимыми процедурами и триггерами, а также настройкой кластеров для высокой доступности и отказоустойчивости.
