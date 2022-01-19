const express = require("express");
const { join } = require("path");
const { graphqlHTTP } = require("express-graphql");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const PORT = 3000 || process.env.PORT;

const typesArray = loadFilesSync(join(__dirname, "**/*.graphql"));

const schema = makeExecutableSchema({
	typeDefs: typesArray,
	resolvers: {
		Query: {
			// products: (parent, args, context, info) => {
			products: async (parent) => {
				console.log("Getting Products...");
				const products = await Promise.resolve(parent.products);
				return products;
			},
			orders: (parent) => {
				console.log("Getting Orders...");
				return parent.orders;
			},
		},
	},
});

const root = {
	products: require("./products/products.model"),
	orders: require("./orders/orders.model"),
};

const app = express();
app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		rootValue: root,
		graphiql: true,
	})
);

app.listen(PORT, () => {
	console.log(`Running GraphQL server... on port ${PORT}`);
	console.log(`http://localhost:${PORT}/graphql`);
});
