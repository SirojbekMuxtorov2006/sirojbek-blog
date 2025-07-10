export interface ChildProps {
	children: React.ReactNode
}

export interface IBlog {
	title: string
	description: string
	author: string
	tags: string[] // Change from 'string' to 'string[]'
	date: string
	image: string
	key: string
}

export interface IAuthor {
	name: string
	image: string
}
