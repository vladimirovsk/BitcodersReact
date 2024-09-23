export interface ICards {
	id: string,
	title: string,
	text: string,
	img: string
}

export interface IFrameworks {
	name: string
}

export interface ISkills {
	id: string,
	title: string,
	subheader: string,
	img: string,
	expanded: boolean,
	hidden: boolean,
	disabled: boolean,
	frameworks: IFrameworks[]
}
