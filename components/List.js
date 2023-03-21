import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
  return (
    <View style={styles.listItem}>
      {data.map((item) => (
        <Text style={styles.itemText} key={item}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#f5d2bc",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
