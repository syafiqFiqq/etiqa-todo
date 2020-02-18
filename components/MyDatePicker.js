import React, { useState } from "react";
import {
  View,
  Dimensions,
  Button,
  Platform,
  TouchableHighlight,
  Text,
  StyleSheet
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
const { width } = Dimensions.get("window");
export default function MyDatePicker({ onChange, value, displayText }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const showMode = currentMode => {
    setShow(!show);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View>
      <View>
        <TouchableHighlight
          style={styles.dateBox}
          underlayColor="grey"
          onPress={showDatepicker}
        >
          <Text style={styles.displayText}>{displayText}</Text>
        </TouchableHighlight>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          minimumDate={new Date()}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dateBox: {
    marginLeft: 40,
    marginTop: 10,
    justifyContent: "center",
    backgroundColor: "white",
    width: width - 80,
    height: 40,
    borderColor: "black",
    borderWidth: 0.5
  },
  displayText: {
    marginLeft: 10,
    color: "black"
  }
});
