/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
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

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
      comments {
        nextToken
        __typename
      }
      createdAt
      description
      id
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onCreateProfile(filter: $filter, owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
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

export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
      comments {
        nextToken
        __typename
      }
      createdAt
      description
      id
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onDeleteProfile(filter: $filter, owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
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

export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
      comments {
        nextToken
        __typename
      }
      createdAt
      description
      id
      owner
      title
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onUpdateProfile(filter: $filter, owner: $owner) {
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
