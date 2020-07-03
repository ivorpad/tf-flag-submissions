import { schema, use } from "nexus";
import { prisma } from "nexus-plugin-prisma";
import { prismaOptions } from '../../config/prismaOptions';
use(prisma(prismaOptions));
export const Reason = schema.objectType({
    name: "Reason",
    definition(t) {
        t.int("id");
        t.string("authorId");
        t.string("reviewerId");
        t.string("reason");
        t.boolean("resolved");
    },
});
schema.mutationType({
    definition(t) {
        t.crud.createOneReason();
    }
});
schema.queryType({
    definition(t) {
        t.crud.reasons({ filtering: true, pagination: true });
    }
});
//# sourceMappingURL=Reason.js.map