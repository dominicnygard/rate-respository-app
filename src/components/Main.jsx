import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import SignIn from "./Authenticate/SignIn";
import SignOut from "./Authenticate/SignOut";
import SingleRepository from "./RepositoryItem";
import ReviewForm from "./ReviewForm";
import SignUp from "./Authenticate/SignUp";
import UserReviews from "./UserReviews";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundColor,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
        <Route path="/review" element={<ReviewForm />} />
        <Route path="/review/me" element={<UserReviews />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
