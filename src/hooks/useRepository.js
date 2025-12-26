import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id: id },
    fetchPolicy: "cache-and-network",
  });

  return { repository: data?.repository, error, loading };
};

export default useRepository;
