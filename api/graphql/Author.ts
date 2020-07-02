import { schema, use } from "nexus";
import { prisma } from "nexus-plugin-prisma";
import { Reason } from './Reason'
import { Item } from "./Item";
use(prisma({ features: { crud: true } }));

schema.objectType({
  name: "Author",
  definition(t) {
    t.string("username");
    t.list.field("reasons", {
      type: Reason,
      async resolve(_root, _args, ctx) {
        return await ctx.db.reason.findMany()
      },
    });
    t.list.field("items", {
      type: Item,
      async resolve(_root, _args, ctx) {
        return await ctx.db.item.findMany()
      },
    });
  },
});
