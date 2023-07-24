import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/index";
import ProductCardView from "./ProductCardView";
const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={{ marginTop: SIZES.medium, marginLeft: 12 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;

const styles = StyleSheet.create({

});
