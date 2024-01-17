import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { BookmarkAdd, BookmarkAddOutlined } from "@mui/icons-material";
import { CardContent, IconButton } from "@mui/joy";
import { Card, Button, Text } from "@aws-amplify/ui-react";

import Markdown from "../Markdown";
import Link from "next/link";
import React from "react";
import { getCurrentUser } from "aws-amplify/auth";
const client = generateClient<Schema>();

export default function Post({
  post,
  comments,
  showPostLink,
}: {
  post: Schema["Post"];
  comments: Schema["Comment"][];
  showPostLink: boolean;
}) {
  return (
    <>
      <Card>
        <div>
          <Text variation="primary" as="h1" fontSize="2em">
            {post?.title}
          </Text>
          <Text as="small" fontSize="0.5em">
            {new Date(post?.createdAt ?? "").toDateString()}
          </Text>
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
            <Text variation="primary" as="p">
              Activity:
            </Text>
            <Text fontSize="lg" fontWeight="lg">
              {comments?.length} comments
            </Text>
          </div>
        </CardContent>
        {showPostLink ? (
          <Button variation="primary">
            <Link href={`/posts/${post.id}`}>View Post</Link>
          </Button>
        ) : (
          ""
        )}
      </Card>
    </>
  );
}
