import { schema,  } from "nexus";
import { Reason } from "./Reason";

schema.objectType({
  name: "Reviewer",
  definition(t) {
    t.string("username");
    t.list.field("reasons", {
      type: Reason,
      async resolve(_root, _args, ctx) {
        return await ctx.db.reason.findMany()
      },
    });
  },
});

// schema.mutationType({
//   definition(t) {
//     t.crud.createOneReviewer();
//   }
// })

// schema.queryType({
//   definition(t) {
//     t.crud.reviewer();
//     t.crud.reviewers({ filtering: true });
//   },
// });
