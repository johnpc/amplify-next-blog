/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $condition: ModelCommentConditionInput
    $input: CreateCommentInput!
  ) {
    createComment(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      post {
        createdAt
        description
        id
        owner
        title
        updatedAt
        __typename
      }
      postCommentsId
      updatedAt
      __typename
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $condition: ModelLikeConditionInput
    $input: CreateLikeInput!
  ) {
    createLike(condition: $condition, input: $input) {
      createdAt
      id
      isLiked
      owner
      post {
        createdAt
        description
        id
        owner
        title
        updatedAt
        __typename
      }
      postLikesId
      updatedAt
      __typename
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $condition: ModelPostConditionInput
    $input: CreatePostInput!
  ) {
    createPost(condition: $condition, input: $input) {
      comments {
        nextToken
        __typename
      }
      createdAt
      description
      id
      likes {
        nextToken
        __typename
      }
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $condition: ModelProfileConditionInput
    $input: CreateProfileInput!
  ) {
    createProfile(condition: $condition, input: $input) {
      avatarKey
      createdAt
      email
      id
      name
      owner
      updatedAt
      userId
      __typename
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $condition: ModelCommentConditionInput
    $input: DeleteCommentInput!
  ) {
    deleteComment(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      post {
        createdAt
        description
        id
        owner
        title
        updatedAt
        __typename
      }
      postCommentsId
      updatedAt
      __typename
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $condition: ModelLikeConditionInput
    $input: DeleteLikeInput!
  ) {
    deleteLike(condition: $condition, input: $input) {
      createdAt
      id
      isLiked
      owner
      post {
        createdAt
        description
        id
        owner
        title
        updatedAt
        __typename
      }
      postLikesId
      updatedAt
      __typename
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $condition: ModelPostConditionInput
    $input: DeletePostInput!
  ) {
    deletePost(condition: $condition, input: $input) {
      comments {
        nextToken
        __typename
      }
      createdAt
      description
      id
      likes {
        nextToken
        __typename
      }
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $condition: ModelProfileConditionInput
    $input: DeleteProfileInput!
  ) {
    deleteProfile(condition: $condition, input: $input) {
      avatarKey
      createdAt
      email
      id
      name
      owner
      updatedAt
      userId
      __typename
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $condition: ModelCommentConditionInput
    $input: UpdateCommentInput!
  ) {
    updateComment(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      post {
        createdAt
        description
        id
        owner
        title
        updatedAt
        __typename
      }
      postCommentsId
      updatedAt
      __typename
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $condition: ModelLikeConditionInput
    $input: UpdateLikeInput!
  ) {
    updateLike(condition: $condition, input: $input) {
      createdAt
      id
      isLiked
      owner
      post {
        createdAt
        description
        id
        owner
        title
        updatedAt
        __typename
      }
      postLikesId
      updatedAt
      __typename
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $condition: ModelPostConditionInput
    $input: UpdatePostInput!
  ) {
    updatePost(condition: $condition, input: $input) {
      comments {
        nextToken
        __typename
      }
      createdAt
      description
      id
      likes {
        nextToken
        __typename
      }
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $condition: ModelProfileConditionInput
    $input: UpdateProfileInput!
  ) {
    updateProfile(condition: $condition, input: $input) {
      avatarKey
      createdAt
      email
      id
      name
      owner
      updatedAt
      userId
      __typename
    }
  }
`;
