import { schema, use } from "nexus";
import { prisma } from 'nexus-plugin-prisma';
use(prisma());
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
        t.crud.createOneReason({
            async resolve(root, args, ctx, info, originalResolve) {
                const user = await ctx.db.author.findOne({ where: { username: "ivorpadilla" } });
                console.log(user);
                const res = await originalResolve(root, args, ctx, info);
                console.log('logic after the resolver');
                return res;
            }
        });
        t.crud.deleteOneReason();
        t.crud.updateOneReason();
        t.crud.upsertOneReason();
    }
});
schema.queryType({
    definition(t) {
        t.crud.reasons({ filtering: true, pagination: true });
    }
});
//# sourceMappingURL=Reason.js.map