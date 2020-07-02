if (process.env.NODE_ENV === "development") require("nexus").default.reset();

const app = require("nexus").default;

require('../../api/graphql/Reason')
require('../../api/graphql/Author')
require('../../api/graphql/Item')
require('../../api/graphql/Reviewer')

app.assemble();

export default app.server.handlers.graphql;
