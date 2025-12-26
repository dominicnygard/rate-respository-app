import { useMutation } from "@apollo/client/react";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const create = async ({ ownerName, rating, repositoryName, text }) => {
    const { data } = await mutate({
      variables: {
        review: {
          ownerName,
          rating: Number(rating),
          repositoryName,
          text,
        },
      },
    });

    return { data };
  };

  return [create, result];
};

export default useCreateReview;
