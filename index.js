const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const prosemirror = require('./proseMirror/index')
const app = express();
const PORT = process.env.PORT || 3001;

// mongoose.connect("mongodb://localhost/dashboard", { useNewUrlParser: true })

app.get('/', function (req, res) {
    prosemirror.exampleSetup(Object)
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
})

mongoose.connection.once('open', () => {
    vonsole.log('Connected to MongoDB')
})