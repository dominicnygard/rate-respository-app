import { useMutation } from "@apollo/client/react";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDelete = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    const { data } = await mutate({
      variables: {
        deleteReviewId: id,
      },
    });

    return { data };
  };

  return [deleteReview, result];
};

export default useDelete;
