import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../components/Card";
import { useQuery, useSubscription, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// Subscibe(subscription) to todos collection
const SUBSCRIBE_TO_TODOS = gql`
  subscription {
    todo(order_by: { id: desc }) {
      id
      title
      startDate
      endDate
      completed
    }
  }
`;

// Update(mutation) todo completed(true/false) field
const UPDATE_TODO_STATUS = gql`
  mutation update_todo($id: Int!, $completed: Boolean!) {
    update_todo(_set: { completed: $completed }, where: { id: { _eq: $id } }) {
      returning {
        completed
      }
    }
  }
`;

// Function Home
export default function Home({ navigation }) {
  const [updateTodo] = useMutation(UPDATE_TODO_STATUS);
  const { loading, error, data } = useSubscription(SUBSCRIBE_TO_TODOS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.todo.map(({ id, title, startDate, endDate, completed }) => (
          <Card
            key={id}
            title={title}
            startDate={startDate}
            endDate={endDate}
            completed={completed}
            updateCompleted={() =>
              updateTodo({
                variables: {
                  id,
                  completed: !completed
                }
              })
            }
            clicked={() =>
              navigation.navigate("EditTodo", {
                id,
                title,
                sDate: startDate,
                eDate: endDate
              })
            }
          />
        ))}
      </ScrollView>
      <TouchableHighlight
        style={styles.addButton}
        underlayColor="#ff7043"
        onPress={() => {
          navigation.navigate("AddTodo");
        }}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  addButton: {
    backgroundColor: "#ff5722",
    borderColor: "#ff5722",
    borderWidth: 1,
    height: 80,
    width: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 60,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  addButtonText: {
    fontSize: 50,
    color: "white"
  }
});
