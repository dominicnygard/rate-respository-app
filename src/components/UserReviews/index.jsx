import Text from "../Text";

import useMe from "../../hooks/useMe";
import ReviewList from "../ReviewList";

const UserReviews = () => {
  const { reviews, loading, error, refetch } = useMe();
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading reviews</Text>;

  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <ReviewList reviewNodes={reviewNodes} userView={true} refetch={refetch} />
  );
};

export default UserReviews;
