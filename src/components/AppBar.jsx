import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBar,
    flexDirection: "row",
    display: "flex",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight * 0.66,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={{ flex: 1 }}>
        <AppBarTab text={"Repositories"} link={"/"} />
        <AppBarTab text={"Sign in"} link={"/signin"} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
