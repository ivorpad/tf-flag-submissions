import { schema } from "nexus";

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
    t.crud.createOneReason()
    t.crud.deleteOneReason()
    t.crud.updateOneReason()
    t.crud.upsertOneReason()
  }
})

schema.queryType({
  definition(t) {
    t.crud.reasons({filtering: true, pagination: true})
  }
})