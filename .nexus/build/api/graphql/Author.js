import { schema } from "nexus";
import { Reason } from './Reason';
import { Item } from "./Item";
schema.objectType({
    name: "Author",
    definition(t) {
        t.string("username");
        t.list.field("reasons", {
            type: Reason,
            async resolve(_root, _args, ctx) {
                return await ctx.db.reason.findMany();
            },
        });
        t.list.field("items", {
            type: Item,
            async resolve(_root, _args, ctx) {
                return await ctx.db.item.findMany();
            },
        });
    },
});
//# sourceMappingURL=Author.js.map