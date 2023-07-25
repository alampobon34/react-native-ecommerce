import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/index";
import useFetch from "../../hook/useFetch";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import ProductCardView from "./ProductCardView";

const ProductList = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} 
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => (<View style={styles.seperator} />)}
      renderItem={({item}) => (<ProductCardView  item={item}
    
        />)}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    alignItems: "center",
    paddingTop: SIZES.xxLarge,
    paddingLeft: SIZES.small / 2,
  },

  seperator:{
    height: 10,
    paddingBottom: 6
  }
});
