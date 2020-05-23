import * as React from 'react'
import styled from 'styled-components'
import  debounce  from 'lodash.debounce'

const StyledField = styled.input`
    width: 100%;
	padding: 2.7rem 2.3rem;
	background: #FFFFFF;
	border: .1rem solid #A0A0A0;
	font-weight: 300;
	font-size: 3rem;
	line-height: 3.5rem;
	color: #000000;
	transition: all 0.3s linear;
`

interface IFieldEvent extends React.FormEvent<HTMLInputElement> {
	target: HTMLInputElement
}

interface Props {
	placeholder: string
	onInput: (e: string) => void
}

export class Field extends React.Component<Props> {
	inputHadler = debounce( (self: Field, val: string) => {
		if(val.length > 2) {
			self.props.onInput(val)
		}
	}, 300)

	render() {
		return (
			<div>
				<StyledField
					placeholder={ this.props.placeholder }
					onInput={ (e: IFieldEvent) => this.inputHadler(this, e.target.value.trim()) }
				/>
			</div>
			
		)
	}

}

