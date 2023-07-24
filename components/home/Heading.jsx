import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/index";
import { Ionicons } from "@expo/vector-icons";
const Heading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginBottom: -SIZES.small,
    marginHorizontal: 12,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontFamily: "semibold",
    fontSize: SIZES.xLarge - 2,
  },
});
