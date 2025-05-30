export interface IMenuItem {
	text: string;
	url: string;
}

export interface ISocials {
	facebook?: string;
	github?: string;
	instagram?: string;
	linkedin?: string;
	threads?: string;
	twitter?: string;
	youtube?: string;
	x?: string;
	[key: string]: string | undefined;
}

export interface ICard {
	title: string;
	description: string;
	icon?: string;
	href?: string;
}

export interface IButton {
	text: string;
	className: string;
	href?: string;
}
