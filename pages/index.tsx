import { Schema } from "@/amplify/data/resource";
import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { generateClient } from "aws-amplify/api";
import Post from "@/components/post/Post";
import { Image, Text } from "@aws-amplify/ui-react";
const client = generateClient<Schema>();

export type LoadedPost = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  comments: any[];
};
export default function Home() {
  const [posts, setPosts] = React.useState<LoadedPost[]>([]);
  const loadPosts = async (posts: Schema["Post"][]) => {
    posts.sort((a, b) =>
      new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()
        ? 1
        : -1,
    );

    const postPromises = posts.map(
      async (post): Promise<LoadedPost> => ({
        ...post,
        comments: (await post.comments()).data as Schema["Comment"][],
      }),
    );

    setPosts(await Promise.all(postPromises));
  };
  React.useEffect(() => {
    const setup = async () => {
      const listPostsResponse = await client.models.Post.list();
      loadPosts(listPostsResponse.data);
    };
    setup();
    const sub = client.models.Post.observeQuery().subscribe(({ items }) => {
      loadPosts(items);
    });

    return () => sub.unsubscribe();
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "300px",
          backgroundImage:
            "url(https://source.unsplash.com/collection/94734566/1920x500)",
        }}
      >
        <Text
          variation="primary"
          as="h1"
          fontSize="5em"
          color="whitesmoke"
          style={{
            textAlign: "center",
            textShadow: "1px 1px 2px black",
            transform: "translateY(50%)",
          }}
        >
          Blog Title
        </Text>
      </div>
      <Divider />
      <div style={{ width: "50%", marginLeft: "25%" }}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            "& .markdown": {
              py: 3,
            },
          }}
        >
          {posts.map((post) => (
            <div key={post.id} style={{ padding: "5px" }}>
              <Post
                post={post as unknown as Schema["Post"]}
                comments={post.comments}
                showPostLink
              />
            </div>
          ))}
        </Grid>
      </div>
    </>
  );
}
