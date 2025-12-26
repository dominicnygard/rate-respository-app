import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (sorting, search) => {
  console.log(search);
  const { orderBy, orderDirection } = sorting;
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy,
      orderDirection,
      searchKeyword: search,
    },
  });

  return { repositories: data?.repositories ?? { edges: [] }, error, loading };
};

export default useRepositories;
