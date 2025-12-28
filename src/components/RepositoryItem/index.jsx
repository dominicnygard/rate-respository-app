import { useParams } from "react-router-native";
import useRepository from "../../hooks/useRepository";
import ReviewList from "../ReviewList";

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore, refetch, loading } = useRepository({
    id,
    first: 10,
  });

  if (loading && !repository) {
    return null;
  }

  const reviewNodes = repository?.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <ReviewList
      repository={repository}
      reviewNodes={reviewNodes}
      singleView={false}
      onEndReach={onEndReach}
      refetch={refetch}
    />
  );
};

export default SingleRepository;
