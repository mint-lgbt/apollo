require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Post {
    title: String
    author: String
    content: String
  }

  type Query {
    posts: [Post]
  }
`;

const [posts] = [
    {
      title: 'Test',
      author: 'anon',
      content: 'This is a test.',
    },
    {
      title: 'Hello World!',
      author: 'anon',
      content: 'This is also a test.',
    },
  ];

const resolvers = {
    Query: {
      posts: () => posts,
    },
  };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
