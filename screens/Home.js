import React from "react";
import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home Screen!</Text>
      <Button
        title="Add Todo"
        onPress={() => navigation.navigate("AddTodo")}
      ></Button>
      <Button
        title="Edit Todo"
        onPress={() => navigation.navigate("EditTodo")}
      ></Button>
    </View>
  );
}
