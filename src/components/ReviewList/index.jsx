import { FlatList, StyleSheet, View } from "react-native";
import ReviewItem from "./ReviewItem";
import RepositoryInfo from "../RepositoryItem/RepositoryInfo";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = ({
  reviewNodes,
  repository,
  userView,
  refetch,
  onEndReach,
}) => {
  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <ReviewItem review={item} userView={userView} refetch={refetch} />
      )}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() =>
        !userView && <RepositoryInfo item={repository} singleView={true} />
      }
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default ReviewList;
