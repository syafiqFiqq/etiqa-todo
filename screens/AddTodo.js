import React from "react";
import { View, Text, Button } from "react-native";

export default function AddTodo({ navigation }) {
  return (
    <View>
      <Text>AddTodo Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
      <Button
        title="Edit Todo"
        onPress={() => navigation.navigate("EditTodo")}
      ></Button>
    </View>
  );
}
