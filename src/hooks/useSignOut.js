import { useApolloClient } from "@apollo/client/react";
import useAuthStorage from "./useAuthStorage";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProviderContext";

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { dispatch } = useContext(AuthContext);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    dispatch({
      type: "SIGN_OUT",
    });

    await apolloClient.resetStore();
  };

  return signOut;
};

export default useSignOut;
