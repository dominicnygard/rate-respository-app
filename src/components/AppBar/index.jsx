import { View, StyleSheet, ScrollView } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProviderContext";
import Constants from "expo-constants";
import theme from "../../theme";

import AppBarTab from "../AppBarTab";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBar,
    flexDirection: "row",
    display: "flex",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight * 0.66,
  },
});

const AppBar = () => {
  const { state } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={{ flex: 1 }}>
        <AppBarTab text={"Repositories"} link={"/"} />
        {!state.isAuthenticated ? (
          <>
            <AppBarTab text={"Sign in"} link={"/signin"} />
            <AppBarTab text={"Sign up"} link={"/signup"} />
          </>
        ) : (
          <>
            <AppBarTab text={"Create a review"} link={"/review"} />
            <AppBarTab text={"Sign out"} link={"/signout"} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
