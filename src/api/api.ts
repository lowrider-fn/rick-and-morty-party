import ApolloClient from 'apollo-boost'
import * as ApolloReactHooks from '@apollo/react-hooks'
import { onError } from 'apollo-link-error'

import { CharReq, CharData } from './types'
import { CHARS } from './scheme'

export const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
})

export const getChars = (name: string) => ApolloReactHooks.useQuery<CharData, CharReq>(
	CHARS,
	{ variables:
        { page  : 1, filter:
            { name: name },
        }, 
	},
)

const link = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			),
		)

	if (networkError) console.log(`[Network error]: ${networkError}`)
})