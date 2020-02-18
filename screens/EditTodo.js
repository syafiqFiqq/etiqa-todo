import * as React from "react";
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Alert
} from "react-native";
import MyDatePicker from "../components/MyDatePicker";

const { width } = Dimensions.get("window");

export default function EditTodo({ route, navigation }) {
  const { id, title, sDate, eDate } = route.params;

  const [startDate, setStartDate] = React.useState(sDate);
  const [endDate, setEndDate] = React.useState(eDate);
  const [value, onChangeText] = React.useState(title);

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
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Text style={styles.text}>Start Date</Text>
      <MyDatePicker
        displayText={new Date(startDate).toLocaleDateString()}
        value={new Date(startDate)}
        onChange={onStartDateChange}
      />
      <Text style={styles.text}>Estimated End Date</Text>
      <MyDatePicker
        displayText={new Date(endDate).toLocaleDateString()}
        value={new Date(endDate)}
        onChange={onEndDateChange}
      />
      <TouchableHighlight
        style={styles.createNowButton}
        underlayColor="rgba(0, 0, 0, 0.9)"
        onPress={() => {
          Alert.alert("Method to be implement");
          onChangeText("");
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.createNowText}>Update Now</Text>
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
