import * as React from 'react'
import styled from 'styled-components'
import { Char } from 'api/types'
import { getChars } from 'api/api'

import { AppSearch, AppParty } from './components/app'

const Main = styled.main`
position: relative;
width: 100%;
background: #E5E5E5;
`
const Inner = styled.section`
max-width: 120rem;
margin: 0 auto;
padding: 14rem 19.5rem;
display:grid;
grid-template-rows: repeat(2,max-content);
grid-row-gap: 10rem;
`

export const App: React.FC = () =>  {
	const [isLoad, setIsLoad]: [boolean, Function] = React.useState(true)
	const [search, setSearch]: [string, Function] = React.useState('')
	const [items, setItems]: [Array<Char>, Function] = React.useState([])
	const [currentItems, setCurrentItems]: [Array<Char>, Function] = React.useState([])
	const [removedItems, setRemovedItems]: [Array<Char>, Function] = React.useState([])
	
	const { data, loading, refetch } = getChars(search)

	React.useEffect(() => {
		if(data?.characters) {
			setItems(data.characters.results)
			setIsLoad(!isLoad)
		}
	}, [data])

	const updateSearch = (val: string) => {
		setIsLoad(true)
		setSearch(val)
		refetch()
			.catch(() => {
				setItems([])
				setIsLoad(false)
			})
	}

	const addToGame = (item: Char) => {
		const i = [...currentItems]
		i.unshift(item)
		setCurrentItems(i)
	}

	const removeCard = (item: Char) => {
		const i = [...removedItems]
		i.push(item)
		setRemovedItems(i)
	}

	const filteredItems = () => items.filter((item) => !removedItems.some((rmItem) => rmItem.id === item.id))

	return (
		<Main>
			<Inner>
				<AppSearch 
					isLoad={ isLoad }
					items={ filteredItems() }
					onClick={ addToGame }
					onRemove={ removeCard }
					onSearch={ updateSearch }
				/>
				<AppParty
					items={ currentItems }
				/>
			</Inner>
		</Main>
	)
}