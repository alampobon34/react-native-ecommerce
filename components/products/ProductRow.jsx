import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/index";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hook/useFetch";

const ProductRow = () => {
  // const products = [1, 2, 3, 4];
  const { data, isLoading, error } = useFetch();
  // console.log(data.products);
  return (
    <View style={{ marginTop: SIZES.medium, marginLeft: 12 }}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxlarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something Went Wrong!!!</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductRow;

const styles = StyleSheet.create({});
