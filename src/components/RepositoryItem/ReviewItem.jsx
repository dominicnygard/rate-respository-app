import { StyleSheet, View } from "react-native";
import { format } from "date-fns";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.textThird,
    borderRadius: 6,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  topRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  ratingCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.colors.primary,
  },
  ratingText: {
    fontWeight: "bold",
    fontSize: 18,
    color: theme.colors.primary,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  dateText: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.ratingCircle}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.nameText}>{review.user.username}</Text>
          <Text style={styles.dateText}>
            {format(new Date(review.createdAt), "dd.MM.yyyy")}
          </Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
