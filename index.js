const express = require("express")
const { ApolloServer, gql } = require("apollo-server-express")

const app = express()
const port = process.env.PORT || 5000

const typeDefs = require("./Types")
const resolvers = require("./Resolvers")

const server = new ApolloServer({ typeDefs, resolvers })

async function startServer() {
    try {

    await server.start()
    server.applyMiddleware({ app })

    }
    catch (err) {
        console.log("HERE IS ERROR", err);
      }
}

startServer()

app.listen(port, () =>
	console.log("Server ready at http://localhost:$5000" + server.graphqlPath))