require('dotenv').config();
const express = require('express');
const parseGraphQL = require('@parse-graphql/express');

const {
    PARSE_SERVER_APPLICATION_ID,
    PARSE_SERVER_MASTER_KEY,
    PARSE_SERVER_URL,
    PARSE_GRAPHQL_PORT
} = process.env;

const PORT = PARSE_GRAPHQL_PORT || 1234;

const app = express();

const graphqlAPI = parseGraphQL({
    appId: PARSE_SERVER_APPLICATION_ID,
    masterKey: PARSE_SERVER_MASTER_KEY,
    serverURL: PARSE_SERVER_URL,
    dynamicSchema: true,
    graphiql: true,
});

app.use('/graphql', graphqlAPI);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
