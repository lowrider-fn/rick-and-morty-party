import { gql }from 'apollo-boost'

export const QUERY_CHARS = gql`
  query getChars($page: Int!,$filter: FilterCharacter) {
    characters(page: $page,filter:$filter) {
      results {
        id
        name
        image
      }
    }
  }
`