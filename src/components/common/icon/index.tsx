import * as React from 'react'
import styled from 'styled-components'

import { Glyph } from './glyph'

const StyledIcon = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
`

interface Props {
	glyph: Glyph
	onClick?: () => void
	className?: string
}

export class Icon extends React.Component<Props> {
	get icon() {
		return require(`!!raw-loader!./icons/${this.props.glyph}.svg`).default
	}
	render() {
		return (
			<StyledIcon
				className={ this.props.className }
				dangerouslySetInnerHTML={ { __html: this.icon }  }
			/>
		)
	}
}
