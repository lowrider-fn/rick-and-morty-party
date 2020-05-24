import * as React from 'react'
import styled from 'styled-components'
import { Field, Icon } from 'components/common'
import { Character } from 'api/generated/graphql'

import { AppCard } from './app-card'

const Search = styled.section`
grid-template-rows: max-content max-content;
grid-row-gap: 3rem;
display:grid;
`

const CardList = styled.section`
grid-template-columns: repeat(4,max-content);
grid-gap: 3rem;
display:grid;
`

const SizedIcon = styled(Icon)`
width: 3rem;
	height:3rem;
`

const Error = styled.div`
display: grid;
align-items: center;
justify-content: center;
grid-template-columns: repeat(2,max-content);
grid-gap: 2rem;
border-radius: .4rem;
color: #fff;
background-color: #ff5252;
border-color: #ff5252;
ransition: .3s cubic-bezier(.25,.8,.5,1);
font-size: 2rem;
padding: 2rem;
`

const Loader = styled(Icon)`
padding:2rem;
width: 10rem;
	height:10rem;
	margin:0 auto;
`

interface Props {
	items: Array<Character>
	isLoad: boolean
	onClick: (item: Character) => void
	onRemove: (item: Character) => void
	onSearch: (e: string) => void
}

export class AppSearch extends React.Component<Props> {

	render() {
		const { items, onClick, onRemove, onSearch, isLoad } = this.props

		return (
			<Search>
				<Field
					placeholder={ 'Введите имя персонажа' }
					onInput={ onSearch }
				/>
				{
					(isLoad && <Loader glyph={ 'loader' }/>)
					|| (items.length > 0 && (
						<CardList>
							{
								items.map((item: Character, i) => (
									<AppCard
										key={ i }
										item={ item }
										onClick={ () => onClick(item) }
										onRemove={ () => onRemove(item) }
									/>
								))
							}	
						</CardList>
					))
					|| (
						<Error>
							<SizedIcon glyph={ 'morty' }/>
							По вашему запросу ничего не найденно
						</Error>
					)
				}
			</Search>
			
		)
	}
}