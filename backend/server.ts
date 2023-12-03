import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

   type Star {
        actor: String
        actress: String
    }
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    star: Star
  }
 type Movie {
    movieName: String
    remark: String
 }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    movies: [Movie]
  }

  type Mutation{
    createMovie(movieName:String,remark:String):String
  }
`;

const resolvers = {
    Query: {
        books: () => books,
        movies: () => movies
    },
    Mutation: {
        createMovie: (root, args, context, info) => {
            movies.push({ movieName: args.movieName, remark: args.remark })
            console.log('CP 4', movies);
            return true;
        }
    }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
        star: {
            actor: 'Tom Cruise',
            actress: 'Jeniffer Lawrence',
        },
        production_house: 'Red Chilli'
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
        star: {
            actor: 'Tom Cruise',
            actress: 'Jeniffer Lawrence',
        },
    },
];


var movies = [
    {
        movieName: 'Sniper reloaded',
        remark: 'Jimmy',
    },
    {
        movieName: 'London Bridge',
        remark: 'Could not care less',
    },
];