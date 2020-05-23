import * as React from 'react'
import styled from 'styled-components'
import { Char } from 'api/types'

import { AppCard } from './app-card'

const H1 = styled.h1`
font-weight: bold;
font-size: 3rem;
line-height: 3.5rem;
text-align: center;
text-transform:uppercase;
color: #000000;
`

const Party = styled.section`
grid-template-rows: repeat(2,max-content);
grid-row-gap: 2rem;
display:grid;
`

const CardBox = styled.section`
grid-template-columns: repeat(2,max-content);
grid-column-gap: 3rem;
display:grid;
justify-content:center;
`

interface Props {
	items: Array<Char>
}

enum Chars{
	RICK='rick',
	MORTY='morty'
}

export class AppParty extends React.Component<Props> {
	names = [Chars.RICK, Chars.MORTY]

	getRightItem(name: Chars) {
		return this.props.items.find(item => item.name.toLowerCase().includes(name))
	}

	render() {
		return (
			<Party>
				<H1>PARTY</H1>
				<CardBox>

					{
						this.names.map((name, i) => (
							<AppCard
								key={ i }
								text={ name.toUpperCase() }
								item={ this.getRightItem(name) }
							/>
						))
					}
					
				</CardBox>
			</Party>
		)
	}
}