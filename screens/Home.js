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

// Function Home
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          title="Test"
          startDate="2020-01-01"
          endDate="2020-01-01"
          completed={false}
          updateCompleted={() => Alert.alert("Method to be implement")}
          clicked={() =>
            navigation.navigate("EditTodo", {
              id: 1,
              title: "Test",
              sDate: "2020-01-01",
              eDate: "2020-01-01"
            })
          }
        />
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
