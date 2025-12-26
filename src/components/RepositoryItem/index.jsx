import { Text, FlatList, View, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../../hooks/useRepository";

import RepositoryInfo from "./RepositoryInfo";

import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading, error } = useRepository(id);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading repository</Text>;

  const reviewNodes = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryInfo item={repository} singleView={true} />
      )}
    />
  );
};

export default SingleRepository;
