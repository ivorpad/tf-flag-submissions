// GENERATED NEXUS START MODULE
// Run framework initialization side-effects
// Also, import the app for later use
import app from "nexus";
// Last resort error handling
process.once('uncaughtException', error => {
    app.log.fatal('uncaughtException', { error: error });
    process.exit(1);
});
process.once('unhandledRejection', error => {
    app.log.fatal('unhandledRejection', { error: error });
    process.exit(1);
});
// Import the user's schema modules
import './api/graphql/Author';
import './api/graphql/Item';
import './api/graphql/Reason';
import './api/graphql/Reviewer';
// Import the user's app module
require("./api/app");
app.assemble();
app.start();
//# sourceMappingURL=module.jsx.map