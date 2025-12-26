import Text from "../Text";
import { StyleSheet, View, Pressable, Image } from "react-native";
import theme from "../../theme";
import { useNavigate } from "react-router-native";
import * as Linking from "expo-linking";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
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
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    color: theme.colors.textPrimary,
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    color: theme.colors.textSecondary,
    marginBottom: 6,
  },
  languageBadge: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    color: "#fff",
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    overflow: "hidden",
    fontSize: 14,
    fontWeight: "bold",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },
  stat: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontWeight: "bold",
    fontSize: 15,
  },
  statLabel: {
    color: theme.colors.textSecondary,
    fontSize: 13,
  },
  fullWidthButton: {
    width: "100%",
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  buttonText: {
    color: theme.colors.textThird,
    fontWeight: "bold",
    fontSize: 16,
  },
});

const formatCount = (count) =>
  count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;

const RepositoryInfo = ({ item, singleView }) => {
  const navigate = useNavigate();

  return (
    <View testID="repositoryItem" style={styles.card}>
      <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
        <View style={styles.topRow}>
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
          <View style={styles.info}>
            <Text testID="repositoryName" style={styles.name}>
              {item.fullName}
            </Text>
            <Text testID="repositoryDescription" style={styles.description}>
              {item.description}
            </Text>
            <Text testID="repositoryLanguage" style={styles.languageBadge}>
              {item.language}
            </Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text testID="repositoryStargazers" style={styles.statValue}>
              {formatCount(item.stargazersCount)}
            </Text>
            <Text style={styles.statLabel}>Stars</Text>
          </View>
          <View style={styles.stat}>
            <Text testID="repositoryForks" style={styles.statValue}>
              {formatCount(item.forksCount)}
            </Text>
            <Text style={styles.statLabel}>Forks</Text>
          </View>
          <View style={styles.stat}>
            <Text testID="repositoryReviews" style={styles.statValue}>
              {item.reviewCount}
            </Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
          <View style={styles.stat}>
            <Text testID="repositoryRating" style={styles.statValue}>
              {item.ratingAverage}
            </Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>
        {singleView && (
          <Pressable
            style={styles.fullWidthButton}
            onPress={() => {
              Linking.openURL(item.url);
            }}
          >
            <Text style={styles.buttonText}>Open in github</Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

export default RepositoryInfo;
