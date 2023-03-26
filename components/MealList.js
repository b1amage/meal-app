import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealList = ({ items }) => {
  const renderMealItems = (itemData) => {
    const item = itemData.item;
    const { id, title, imageUrl, duration, complexity, affordability } = item;
    const mealItemProps = {
      id,
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
