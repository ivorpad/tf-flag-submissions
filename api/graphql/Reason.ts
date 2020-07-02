import { schema, use } from "nexus";
import { makeSchema, queryType, objectType,  } from "@nexus/schema";
import { prisma} from "nexus-plugin-prisma";
use(prisma( { features: {  crud: true } } ));

  export const Reason = objectType({
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
      t.string("createOneReason", {
        resolve(_, _args, _ctx) {
          return {}
        },
      });
    }
  })

// function createPost(t: any) {
//   return t.field("createPost", {
//     type: "Post",
//     nullable: false,
//     args: {
//       title: schema.arg({ type: "String" }),
//       body: schema.arg({ type: "String" }),
//     },
//     async resolve(_parent: any, args: {title: string, body: string}, ctx: Context) {
//       const post = await ctx.db.post.create({
//         data: {
//           title: args.title,
//           body: args.body,
//         },
//       });
//       return post;
//     },
//   });
// }

// schema.extendType({
//   type: 'Mutation',
//   definition(t) {
//     createPost(t)
//   }
// })