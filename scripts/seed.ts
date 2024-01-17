import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";
import dotenv from "dotenv";
dotenv.config();
Amplify.configure(config);

const client = generateClient<Schema>({
  authMode: "lambda",
  authToken: process.env.ADMIN_API_KEY,
});

const posts = [
  {
    title: "First post!",
    description: `Welcome to my blog, where I will write only best posts of all time

We have cool lists
* list
* of
* things

with tables

|     |     |
| --- | --- |
| One fish | **Two Fish** |
| Red fish  | *Blue Fish* |
| Fish | ~~Fish~~ |

We got code

	await client.models.Post.delete({})

and ofc images!

<div>
<img src="https://source.unsplash.com/collection/94734566/1920x1080" alt="unsplash" width="200"/>
</div>
`,
  },

  {
    title: "Second post!",
    description: `Welcome to my blog, where I will write only best posts of all time

We have cool lists
* list
* of
* things

with tables

|     |     |
| --- | --- |
| One fish | **Two Fish** |
| Red fish  | *Blue Fish* |
| Fish | ~~Fish~~ |

We got code

	await client.models.Post.delete({})

and ofc images!

<div>
<img src="https://source.unsplash.com/collection/94734566/1920x1080" alt="unsplash" width="200"/>
</div>
`,
  },
];

const seed = async () => {
  const existingPosts = await client.models.Post.list();
  const deletePromises = existingPosts.data.map(async (post) => {
    await client.models.Post.delete({ id: post.id });
  });
  await Promise.all(deletePromises);

  const promises = posts.map(async (post) => {
    const response = await client.models.Post.create(post);
    console.log({
      ...response,
      created: !response.errors,
    });
  });
  await Promise.all(promises);
};
seed();
