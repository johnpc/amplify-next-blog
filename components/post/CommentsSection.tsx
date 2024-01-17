import { Schema } from "@/amplify/data/resource";
import Comment from "./Comment";
import { ListDivider, Typography } from "@mui/joy";
import CommentCreateForm from "@/ui-components/CommentCreateForm";
import React from "react";
import { AuthUser, getCurrentUser } from "aws-amplify/auth";

export default function CommentsSection({
  post,
  comments,
}: {
  post?: Schema["Post"];
  comments: Schema["Comment"][];
}) {
  const [user, setUser] = React.useState<AuthUser>();
  React.useEffect(() => {
    const setup = async () => {
      try {
        const user = await getCurrentUser();
        setUser(user);
      } catch (e) {
        console.log('not logged in');
      }
    };
    setup();
  }, []);
  return (
    <>
      {user ?
        <><h1>Add a comment</h1>
          <CommentCreateForm
            overrides={{
              owner: {
                disabled: true,
                isRequired: false,
                isReadOnly: true,
              },
            }}
            onSubmit={(fields) => {
              return {
                ...fields,
                owner: user?.userId,
                postCommentsId: post?.id,
              };
            }}
          /></> : <></>
      }

      <div>
        <Typography level="h4" component="h1">
          <b>Comments:</b>
        </Typography>
      </div>

      {comments?.length ? comments?.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} />
          <ListDivider inset={"startContent"} />
        </div>
      )) : 'No Comments Yet'}
    </>
  );
}
