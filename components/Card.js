import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import moment from "moment";

const { width } = Dimensions.get("window");

export default function Card({
  title,
  startDate,
  endDate,
  completed,
  updateCompleted,
  clicked
}) {
  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback onPress={clicked}>
        <Text style={styles.title}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20
          }}
        >
          <View>
            <Text style={styles.subtext}>Start Date</Text>
            <Text style={styles.text}>{startDate}</Text>
          </View>
          <View>
            <Text style={styles.subtext}>End Date</Text>
            <Text style={styles.text}>{endDate}</Text>
          </View>
          <View>
            <Text style={styles.subtext}>Time Left</Text>
            <Text style={styles.text}>
              {moment(endDate)
                .endOf("day")
                .fromNow()}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.cardFooter}>
        <View style={styles.status}>
          <Text style={styles.subtext}>Status</Text>
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            {completed ? "Completed" : "Incomplete"}
          </Text>
        </View>
        <View>
          <CheckBox
            size={15}
            title={"Tick if completed"}
            checked={false}
            iconRight={true}
            checked={completed}
            onPress={updateCompleted}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width - 20,
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
    marginTop: 20
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    paddingHorizontal: 10
  },
  subtext: {
    color: "grey",
    fontSize: 15,
    paddingHorizontal: 10
  },
  text: {
    color: "black",
    fontSize: 15,
    paddingHorizontal: 10
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f3ecd9",
    marginTop: 10,
    height: 50,
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  status: {
    flexDirection: "row"
  }
});
