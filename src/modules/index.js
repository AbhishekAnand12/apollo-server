import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import path from "path";

import * as user from "./user";
import * as trainee from "./Trainee";

const typesArray = loadFilesSync(path.join(__dirname, "./**/*.graphql"));

const appSchema = mergeTypeDefs(typesArray, { all: true });

export default makeExecutableSchema({
  resolvers: {
    Query: {
      ...user.Query,
      ...trainee.Query,
    },
    Mutation: {
      ...trainee.Mutation,
    },
    Subscription: {
      ...trainee.Subscription,
    },
  },
  typeDefs: [appSchema],
});
