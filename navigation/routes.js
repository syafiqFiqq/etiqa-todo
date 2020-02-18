import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import AddTodoScreen from "../screens/AddTodo";
import EditTodoScreen from "../screens/EditTodo";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#f8a903"
          },
          title: "To-Do List",
          headerTitleContainerStyle: {
            textAlign: "left",
            fontWeight: "bold",
            flex: 1
          }
        }}
      />
      <Stack.Screen
        name="AddTodo"
        component={AddTodoScreen}
        options={{
          headerStyle: {
            backgroundColor: "#f8a903"
          },
          title: "Add To-Do"
        }}
      />
      <Stack.Screen
        name="EditTodo"
        component={EditTodoScreen}
        options={{
          headerStyle: {
            backgroundColor: "#f8a903"
          },
          title: "Edit To-Do"
        }}
      />
    </Stack.Navigator>
  );
}
