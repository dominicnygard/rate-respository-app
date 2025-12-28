import { gql } from "@apollo/client/core";
import { REPOSITORY_DETAILS, REVIEW_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query Query(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        cursor
        node {
          ...repositoryDetails
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query ($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...repositoryDetails
      url
      reviews(first: $first, after: $after) {
        edges {
          cursor
          node {
            ...reviewDetails
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          startCursor
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
`;

export const GET_USER_DETAILS = gql`
  query Me {
    me {
      reviews {
        edges {
          node {
            ...reviewDetails
            repositoryId
            repository {
              fullName
            }
          }
        }
      }
    }
  }
  ${REVIEW_DETAILS}
`;
