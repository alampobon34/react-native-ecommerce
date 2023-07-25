import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS } from "../../constants/index";
import { useNavigation } from "@react-navigation/native";
const SearchCardView = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetails", { item })}
        style={styles.container}
      >
        <View style={styles.image}>
          <Image style={styles.productImg} source={{ uri: item?.thumbnail }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{item?.title}</Text>
          <Text style={styles.price}>${item?.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchCardView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#fff",
  },

  image: {
    width: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignContent: "center",
  },

  productImg: {
    width: "100%",
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: "cover",
  },

  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },

  productTitle: {
    fontSize: SIZES.medium,
    fontFamily: "bold",
    color: COLORS.primary,
  },

  price: {
    fontFamily: "regular",
    fontSize: SIZES.small,
  },
});
