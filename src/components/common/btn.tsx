import * as React from 'react'
import styled from 'styled-components'

const StyledBtn = styled.button`
display:inline-flex;
&:hover{
	transform:scale(1.05);
}
`
export interface Props {
	onClick: () => void
	children?: React.ReactNode | string
	className?: string
}

export class Btn extends React.Component<Props> {

	click=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		e.stopPropagation()

		this.props.onClick()
	}

	render() {
		return (
			<StyledBtn
				className={ this.props.className }
				type="button" 
				onClick={ this.click }
			>
				{this.props.children}
			</StyledBtn>
		)
	}
}
