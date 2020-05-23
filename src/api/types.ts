export interface CharRes {
	character: Char
}

export interface CharReq {
	page: number
	filter: FilterChar
}

export interface FilterChar {
	name: string
}

export interface CharData {
	characters: Chars
}

export interface Chars {
	results: Array<Char>
}

export interface Char {
	id: number
	name: string
	image: string
}

