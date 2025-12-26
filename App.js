import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

import Main from "./src/components/Main";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import AuthProvider from "./src/contexts/AuthProviderContext";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NativeRouter>
          <ApolloProvider client={apolloClient}>
            <AuthStorageContext.Provider value={authStorage}>
              <AuthProvider>
                <Main />
              </AuthProvider>
            </AuthStorageContext.Provider>
          </ApolloProvider>
        </NativeRouter>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
