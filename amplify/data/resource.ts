// amplify/data/resource.ts
import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { AmplifyFunction, ConstructFactory } from "@aws-amplify/plugin-types";

const schema = a.schema({
  Profile: a
    .model({
      id: a.string().required(),
      userId: a.string().required(),
      email: a.string().required(),
      avatarKey: a.string(),
      name: a.string(),
    })
    .authorization([
      a.allow.owner(),
      a.allow.custom(),
      a.allow.private().to(["read"]),
      a.allow.public("iam").to(["read"]),
    ]),
  Post: a
    .model({
      description: a.string().required(),
      title: a.string().required(),
      comments: a.hasMany("Comment"),
      likes: a.hasMany("Like"),
    })
    .authorization([
      a.allow.custom(),
      a.allow.owner(),
      a.allow.private().to(["read", "create"]),
      a.allow.public("iam").to(["read"]),
    ]),
  Comment: a
    .model({
      content: a.string().required(),
      post: a.belongsTo("Post"),
    })
    .authorization([
      a.allow.owner(),
      a.allow.private().to(["read", "create"]),
      a.allow.public("iam").to(["read"]),
    ]),
  Like: a
    .model({
      isLiked: a.boolean().required(),
      post: a.belongsTo("Post"),
    })
    .authorization([
      a.allow.owner(),
      a.allow.private().to(["read", "create"]),
      a.allow.public("iam").to(["read"]),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = (authFunction: ConstructFactory<AmplifyFunction>) =>
  defineData({
    schema,
    authorizationModes: {
      defaultAuthorizationMode: "userPool",
      lambdaAuthorizationMode: {
        function: authFunction,
        timeToLiveInSeconds: 300,
      },
    },
  });
