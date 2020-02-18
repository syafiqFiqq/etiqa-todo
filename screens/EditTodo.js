import React from "react";
import { View, Text, Button } from "react-native";

export default function EditTodo({ navigation }) {
  return (
    <View>
      <Text>EditTodo Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
      <Button
        title="Add Todo"
        onPress={() => navigation.navigate("AddTodo")}
      ></Button>
    </View>
  );
}
