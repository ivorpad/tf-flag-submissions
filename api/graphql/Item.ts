import { schema, use } from "nexus";
import { prisma } from "nexus-plugin-prisma";
use(prisma({ features: { crud: true } }));

export const Item = schema.objectType({
  name: "Item",
  definition(t) {
    t.int("id");
    t.string("authorUsername");
    t.string("itemName");
    // t.date?.("createdAt");
    // t.date?.("updatedAt");
  },
});

schema.extendType({
  type: "Query",
  definition(t) {
    t.field("getItemCount", {
      type: "Int",
      nullable: false,
      async resolve(_parent, _args, _ctx): Promise<any> {
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

