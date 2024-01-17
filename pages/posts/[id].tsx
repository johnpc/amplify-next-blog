import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import React from "react";
import { useRouter } from "next/router";
import CommentsSection from "../../components/post/CommentsSection";
import Post from "@/components/post/Post";
const client = generateClient<Schema>();

const PostId = () => {
  const router = useRouter();
  const [post, setPost] = React.useState<Schema["Post"]>();
  const [comments, setComments] = React.useState<Schema["Comment"][]>([]);
  React.useEffect(() => {
    const setup = async () => {
      if (!router.isReady) return;
      const postResponse = await client.models.Post.get({
        id: router.query.id as string,
      });
      const commentsResponse = await postResponse.data.comments();
      setPost(postResponse.data);
      setComments(commentsResponse.data);
    };
    setup();
    const commentSub = client.models.Comment.observeQuery({
      filter: {
        postCommentsId: {
          eq: post?.id,
        },
      },
    }).subscribe(({ items }) => {
      const comments = [...items];
      comments.sort((a, b) =>
        new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()
          ? 1
          : -1,
      );
      setComments(comments);
    });

    return () => {
      return commentSub.unsubscribe();
    };
  }, [router.isReady, post?.id]);

  return (
    <>
      <Post post={post!} comments={comments ?? []} showPostLink={false} />
      <CommentsSection post={post} comments={comments ?? []} />
    </>
  );
};
export default PostId;
