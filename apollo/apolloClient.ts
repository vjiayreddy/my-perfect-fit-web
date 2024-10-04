import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    NormalizedCacheObject,
  } from "@apollo/client";
  import { onError } from "@apollo/client/link/error";
  import { setContext } from "@apollo/client/link/context";
  import Cookies from "js-cookie";
import { themeModeVar } from "./reactive-states";
  
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });
  
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_MPF_API_URL,
  });
  
  const authLink = setContext((_, { headers }) => {
    const sessionToken = Cookies.get("session-token");
    return {
      headers: {
        ...headers,
        authorization: sessionToken ? `Bearer ${sessionToken}` : "",
      },
    };
  });
  
  const initApolloClient = (): ApolloClient<NormalizedCacheObject> => {
    const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: errorLink.concat(authLink.concat(httpLink)),
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              themeMode: {
                read() {
                  if (typeof window !== "undefined") {
                    const _themeMode = window.localStorage.getItem("THEME_MODE");
                    if (_themeMode) {
                      themeModeVar(_themeMode);
                    }
                  }
                },
              },
            },
          },
        },
      }),
      connectToDevTools: process.env.NODE_ENV === "development" ? true : false,
    });
  
    return apolloClient;
  };
  const apolloClient: ApolloClient<NormalizedCacheObject> = initApolloClient();
  export default apolloClient;
  