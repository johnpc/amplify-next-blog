import React from "react";
import PostCreateForm from "@/ui-components/PostCreateForm";

export type LoadedPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  comments: any[];
};
export default function Home() {
  return (
    <>
      <h1>Create a post</h1>
      <PostCreateForm
        overrides={{
          owner: {
            disabled: true,
            isRequired: false,
            isReadOnly: true,
          },
        }}
      />
    </>
  );
}
