import { StyleSheet, View } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: Constants.statusBarHeight * 0.33,
  },
});

const AppBarTab = ({ text, link }) => {
  return (
    <View style={styles.item}>
      <Link to={link}>
        <Text color="textThird" fontWeight="bold">
          {text}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
