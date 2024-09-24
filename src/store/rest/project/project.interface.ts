export interface IProjectState {
	loading: boolean,
	error?: string,
	projects: IProject[]
}

export interface IProject {
	img: string,
	ico: string,
	note: string,
	title: string,
	_id: string
}
