import { gql } from "@apollo/client";

export const REPOSITORY_DETAILS = gql`
  fragment repositoryDetails on Repository {
    id
    fullName
    description
    forksCount
    language
    ownerAvatarUrl
    ratingAverage
    reviewCount
    stargazersCount
  }
`;

export const REVIEW_DETAILS = gql`
  fragment reviewDetails on Review {
    id
    rating
    text
    createdAt
    user {
      id
      username
    }
  }
`;
