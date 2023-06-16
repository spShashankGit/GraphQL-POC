import { gql } from "apollo-angular";
const GET_BOOKS = gql`
    query GetBooks {
        books {
            title
            author
        }
    }
`

export { GET_BOOKS };