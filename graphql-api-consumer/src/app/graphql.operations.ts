import { gql } from "apollo-angular";
const GET_BOOKS = gql`
    query GetBooks {
        books {
            title
            author
            star{
                actress
            }
        }
    }
`

const GET_MOVIES = gql`
    query GetMovies {
        movies {
            movieName
            remark
        }
    }
`

const GET_BOOKS_AND_MOVIES = gql`
    query GetBooksAndMovies {
        books {
            title
            author
          star {
            actor
          }
        }
      movies {
        movieName
        remark
      }
    }`

export { GET_BOOKS, GET_MOVIES, GET_BOOKS_AND_MOVIES };