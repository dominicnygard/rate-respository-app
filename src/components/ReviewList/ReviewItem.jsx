import { Pressable, StyleSheet, View, Alert } from "react-native";
import { format } from "date-fns";
import Text from "../Text";
import theme from "../../theme";
import { useNavigate } from "react-router-native";
import useDelete from "../../hooks/useDelete";

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
  bottomRowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewRepositoryButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    flex: 1,
    marginRight: 8,
  },
  removeRepositoryButton: {
    backgroundColor: theme.colors.errorColor,
    borderRadius: 4,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    flex: 1,
    marginLeft: 8,
  },
  buttonText: {
    color: theme.colors.textThird,
    fontWeight: "bold",
    fontSize: 16,
  },
});

const ReviewItem = ({ review, userView, refetch }) => {
  const [deleteReview] = useDelete();
  const navigate = useNavigate();

  const handleDelete = async () => {
    Alert.alert(
      "Delete Review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteReview(review.id);
              if (refetch) {
                refetch();
              }
            } catch (error) {
              console.error("Error deleting review:", error);
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.ratingCircle}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.nameText}>
            {userView ? review.repository.fullName : review.user.username}
          </Text>
          <Text style={styles.dateText}>
            {format(new Date(review.createdAt), "dd.MM.yyyy")}
          </Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      {userView && (
        <View style={styles.bottomRowButtons}>
          <Pressable
            style={styles.viewRepositoryButton}
            onPress={() => navigate(`/repository/${review.repositoryId}`)}
          >
            <Text style={styles.buttonText}>View repository</Text>
          </Pressable>
          <Pressable
            style={styles.removeRepositoryButton}
            onPress={handleDelete}
          >
            <Text style={styles.buttonText}>Delete review</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
