const express = require('express');
const { join } = require('path');
const { graphqlHTTP } = require('express-graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const PORT = 3000 || process.env.PORT;

const typesArray = loadFilesSync(join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(join(__dirname, '**/*.resolvers.js'));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Running GraphQL server... on port ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});
