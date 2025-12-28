import { useQuery } from "@apollo/client/react";
import { GET_USER_DETAILS } from "../graphql/queries";

const useMe = () => {
  const { data, error, loading, refetch } = useQuery(GET_USER_DETAILS, {
    fetchPolicy: "cache-and-network",
  });

  return { reviews: data?.me.reviews, error, loading, refetch };
};

export default useMe;
