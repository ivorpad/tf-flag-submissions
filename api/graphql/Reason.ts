import { schema, use } from "nexus";
import { prisma } from 'nexus-plugin-prisma';
use(prisma())
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
    t.crud.deleteOneReason()
    t.crud.updateOneReason()
    t.crud.upsertOneReason()
  }
})

schema.extendType({
  type: "Mutation",
  definition(t) {
    t.field("createOneReason", {
      type: "Reason",
      nullable: false,
      args: {
        reason: schema.arg({ type: "String" }),
        authorId: schema.arg({ type: "String" }),
        reviewerId: schema.arg({ type: "String" }),
      },
      async resolve(_parent, args, ctx): Promise<any> {
        const author = await ctx.db.author.findOne({
          where: { username: args.authorId as any },
        });
        const reviewer = await ctx.db.reviewer.findOne({
          where: { username: args.reviewerId as any },
        });
        const findOrCreateAuthor = author ? "connect" : "create";
        const findOrCreateReviewer = reviewer ? "connect" : "create";

        const reason = await ctx.db.reason.create({
          data: {
            Author: { [findOrCreateAuthor]: { username: args.authorId } },
            Reviewer: { [findOrCreateReviewer]: { username: args.reviewerId } },
            reason: args.reason as any,
          },
        });
        return reason;
      },
    });
  },
});

schema.queryType({
  definition(t) {
    t.crud.reasons({filtering: true, pagination: true, ordering: true})
  }
})