import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import MealList from "../components/MealList";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoriteScreen = () => {
  // const favoriteMealContext = useContext(FavoriteContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((item) =>
    favoriteMealIds.includes(item.id)
  );
  return favoriteMeals.length === 0 ? (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>No Favorite Meal Is Added</Text>
    </View>
  ) : (
    <MealList items={favoriteMeals} />
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff",
  },
});
