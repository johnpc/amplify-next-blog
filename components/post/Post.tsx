import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { BookmarkAdd, BookmarkAddOutlined } from "@mui/icons-material";
import { Button, Card, CardContent, IconButton, Typography } from "@mui/joy";
import Markdown from "../Markdown";
import Link from "next/link";
import React from "react";
import { getCurrentUser } from "aws-amplify/auth";
const client = generateClient<Schema>();

export default function Post({
  post,
  comments,
  likes,
  showPostLink,
}: {
  post: Schema["Post"];
  comments: Schema["Comment"][];
  likes: Schema["Like"][];
  showPostLink: boolean;
}) {
  const [liked, setLiked] = React.useState<boolean>(false);

  const handleLikePost = async () => {
    const user = await getCurrentUser();
    const myLike = likes.find((like) => like.owner === user.userId);
    if (myLike) {
      await client.models.Like.update({
        id: myLike.id,
        isLiked: !myLike.isLiked,
      });
    } else {
      await client.models.Like.create({
        isLiked: true,
        postLikesId: post.id,
      });
    }
    setLiked(!liked);
  };
  return (
    <>
      <Card sx={{ width: "100%" }}>
        <div>
          <Typography level="title-lg">{post?.title}</Typography>
          <Typography level="body-sm">
            {new Date(post?.createdAt ?? "").toDateString()}
          </Typography>
          <IconButton
            aria-label="bookmark post"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
            onClick={handleLikePost}
          >
            {showPostLink ? (
              ""
            ) : liked ? (
              <BookmarkAdd />
            ) : (
              <BookmarkAddOutlined />
            )}
          </IconButton>
        </div>

        {post ? (
          <Markdown className="markdown" key={post?.id}>
            {post?.description}
          </Markdown>
        ) : (
          ""
        )}

        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Activity:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {comments?.length} comments
            </Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {likes?.filter((like) => like.isLiked).length} interested
            </Typography>
          </div>
        </CardContent>
        {showPostLink ? (
          <Button
            variant="soft"
            size="md"
            aria-label="View post"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            <Link href={`/posts/${post.id}`}>View Post</Link>
          </Button>
        ) : (
          ""
        )}
      </Card>
    </>
  );
}
