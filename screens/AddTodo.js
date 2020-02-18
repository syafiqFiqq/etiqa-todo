import * as React from "react";
import {
  Alert,
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";
import MyDatePicker from "../components/MyDatePicker";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const { width } = Dimensions.get("window");

const ADD_TODO = gql`
  mutation AddTodo($title: String!, $startDate: date!, $endDate: date!) {
    insert_todo(
      objects: { title: $title, startDate: $startDate, endDate: $endDate }
    ) {
      returning {
        id
        title
        startDate
        endDate
      }
    }
  }
`;

export default function AddTodo({ navigation }) {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [title, onChangeText] = React.useState("");
  const [addTodo] = useMutation(ADD_TODO);

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setStartDate(currentDate);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setEndDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>To-Do Title</Text>
      <TextInput
        multiline
        returnKeyType="done"
        onSubmitEditing={() => {
          Keyboard.dismiss();
        }}
        numberOfLines={4}
        style={styles.titleInput}
        placeholder="Please key in your To-Do title here."
        onChangeText={text => onChangeText(text)}
        value={title}
      />
      <Text style={styles.text}>Start Date</Text>
      <MyDatePicker
        displayText={startDate.toLocaleDateString()}
        value={startDate}
        onChange={onStartDateChange}
      />
      <Text style={styles.text}>Estimated End Date</Text>
      <MyDatePicker
        displayText={endDate.toLocaleDateString()}
        value={endDate}
        onChange={onEndDateChange}
      />

      <TouchableHighlight
        style={styles.createNowButton}
        underlayColor="rgba(0, 0, 0, 0.9)"
        onPress={() => {
          addTodo({
            variables: {
              title,
              startDate: new Date(startDate),
              endDate: new Date(endDate)
            }
          });
          onChangeText("");
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.createNowText}>Create Now</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    marginLeft: 40,
    marginTop: 40,
    color: "grey",
    fontSize: 18
  },
  createNowButton: {
    backgroundColor: "#000000",
    height: 70,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0
  },
  createNowText: {
    fontSize: 20,
    color: "white"
  },
  titleInput: {
    height: 80,
    width: width - 80,
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10
  }
});
