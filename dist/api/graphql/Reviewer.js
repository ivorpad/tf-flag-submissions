var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { schema, use } from "nexus";
import { prisma } from "nexus-plugin-prisma";
import { Reason } from "./Reason";
use(prisma({ features: { crud: true } }));
schema.objectType({
    name: "Reviewer",
    definition(t) {
        t.string("username");
        t.list.field("reasons", {
            type: Reason,
            resolve(_root, _args, ctx) {
                return __awaiter(this, void 0, void 0, function* () {
                    return yield ctx.db.reason.findMany();
                });
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
//# sourceMappingURL=Reviewer.js.map