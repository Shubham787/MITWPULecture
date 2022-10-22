const {ApolloServer, gql} = require('apollo-server-azure-functions')

const typeDefs = gql`

    type Query{
        message:String!
    }

`

const resolvers = {
    Query:{
        message:()=> "Hello World!"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    debug:true,
    playground:true,
    introspection:true
})

export default server.createHandler({
    cors:{
        methods:["POST","OPTIONS"],
        origin:['*'],
        allowedHeaders:["access-control-allow-credentials","access-control-allow-origin","content-type"]
    }
})