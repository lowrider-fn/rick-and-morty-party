import { gql }from 'apollo-boost'

export const CHARS = gql`
  query fetchCharacters($page: Int!,$filter: FilterCharacter) {
    characters(page: $page,filter:$filter) {
      results {
        id
        name
        image
      }
    }
  }
`