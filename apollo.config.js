module.exports = {
	client: {
		service: {
			name    : 'rick-and-morty',
			url     : 'https://rickandmortyapi.com/graphql',
			excludes: ['**/api/generated/**', '**/api/generated/gql.schema.json'],
		},
	},
}
