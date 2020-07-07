import { schema } from "nexus";
export const Item = schema.objectType({
    name: "Item",
    definition(t) {
        var _a, _b;
        t.int("id");
        t.string("authorUsername");
        t.string("itemName");
        (_a = t.date) === null || _a === void 0 ? void 0 : _a.call(t, "createdAt");
        (_b = t.date) === null || _b === void 0 ? void 0 : _b.call(t, "updatedAt");
    },
});
schema.extendType({
    type: "Query",
    definition(t) {
        t.field("getItemCount", {
            type: "Int",
            nullable: false,
            async resolve(_parent, _args, _ctx) {
                return {};
            },
        });
    },
});
// schema.extendType({
//   type: "Mutation",
//   definition(t) {
//     t.field("createOneItem", {
//       type: "Reason",
//       nullable: false,
//       args: {
//         itemName: schema.arg({ type: "String" }),
//         authorUsername: schema.arg({ type: "String" }),
//       },
//       async resolve(_parent, args, ctx): Promise<any> {
//         const author = await ctx.db.author.findOne({ where: { username: args.authorUsername as any } })
//         const findOrCreate = author ? 'connect' : 'create'
//         const item = await ctx.db.item.create({
//           data: {
//             itemName: args.itemName as any,
//             author: {
//               [findOrCreate]: { username: args.authorUsername! },
//             },
//           },
//         });
//         return item;
//       },
//     });
//   },
// });
//# sourceMappingURL=Item.js.map