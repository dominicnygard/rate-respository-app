import { Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: "left",
    justifyContent: "left",
  },
});

const AppBarTab = ({ text }) => {
  return (
    <View style={styles.item}>
      <Pressable onPress={() => console.log("pressed")}>
        <Text style={{ color: "#ffffff", fontWeight: "bold" }}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
