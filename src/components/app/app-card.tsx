import * as React from 'react'
import styled from 'styled-components'
import { Btn, Icon } from 'components/common'
import { Char } from 'api/types'

const Card = styled.div`
display:inline-block;
transition:all .3s linear;
cursor:pointer;
background: #DADADA;
position:relative;
    width: 18rem;
	height:22rem;
	box-shadow:0 0 1rem  rgba(0, 26, 52, 0.2);
`

const Img = styled.img`
width: 100%;
	height:100%;
	object-position: center center;
    object-fit: cover;
`

const SizedIcon = styled(Icon)`
width: 1rem;
	height:1rem;
`

const Text = styled.p`
width: 100%;
bottom:2.5rem;
position: absolute;
font-weight: 300;
font-size: 2.4rem;
line-height: 2.8rem;
text-align: center;
color: #FFFFFF;
text-transform:uppercase;
`

const CloseBtn = styled(Btn)`
width: 3rem;
height: 3rem;
border-radius:50%;
background: rgba(255, 255, 255, 0.75);
border: solid .1rem rgba(255, 255, 255, 0.75);
top:1rem;
right:1rem;
position: absolute;
align-items: center;
justify-content: center;
`

interface Props {
	item?: Char
	text?: string
	onClick?: () => void
	onRemove?: () => void
}

export class AppCard extends React.Component<Props> {

	render() {
		const { item, text, onClick, onRemove } = this.props
		console.log(item?.name)

		return (
			<Card onClick={ onClick }>

				{
					(item && (
						<Img
							src={ item.image }
							alt={ item.name }
						/>
					))
				||
				<Text>{text}</Text>
				}

				{
					onRemove && (
						<CloseBtn
							onClick={ onRemove }
						>
							<SizedIcon glyph={ 'close' }/>
						</CloseBtn>
					)
				}
			</Card>
		)
	}
}

