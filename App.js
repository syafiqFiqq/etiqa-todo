import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { WebSocketLink } from "apollo-link-ws";
import MyStack from "./navigation/routes";
import { enableScreens } from "react-native-screens";

enableScreens();

// create a websocket link:
const link = new WebSocketLink({
  uri: "https://etiqa-todo.herokuapp.com/v1/graphql",
  options: {
    reconnect: true
  }
});

// create an inmemory cache instance for caching graphql data
const cache = new InMemoryCache();

// instantiate apollo client with apollo link instance and cache instance
const client = new ApolloClient({
  link,
  cache
});

// main entry point
export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ApolloProvider>
  );
}
