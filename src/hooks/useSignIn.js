import { useApolloClient, useMutation } from "@apollo/client/react";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProviderContext";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { dispatch } = useContext(AuthContext);
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });

    const token = data.authenticate.accessToken;

    await authStorage.setAccessToken(token);
    dispatch({
      type: "SIGN_IN",
      payload: { token },
    });

    await apolloClient.resetStore();

    return { data };
  };

  return [signIn, result];
};

export default useSignIn;
