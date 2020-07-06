import { use, log, settings, server } from "nexus";
import { prisma } from "nexus-plugin-prisma";
import cors from "cors";
import bodyParser from "body-parser";
use(prisma({ features: { crud: true } }));

server.express.use(cors({origin: ["https://themeforest.net", "http://121.0.0.1:3000", "http://localhost:3000"]}))
server.express.use(bodyParser.json({ type: "application/json" }));

settings.change({
  server: {
    startMessage: (info) => {
      settings.original.server.startMessage(info);
      log.warn("hello!");
    },
    playground: {path: '/playground'}
  },
});
