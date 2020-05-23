import './normalize.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from 'api/api'

import { App } from './app'

ReactDOM.render(

	<React.StrictMode>
		<ApolloProvider client={ client }>
			<App />
		</ApolloProvider>,
	</React.StrictMode>,

	document.getElementById('root'),
	
)