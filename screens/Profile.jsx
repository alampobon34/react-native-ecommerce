import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/space.jpg")}
          />
        </View>
      </View>
      <View style={styles.row2}>
        <View style={{ alignItems: "center", marginTop: -50 }}>
          <Image
            source={require('../assets/images/userDefault.png')}
            style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
          />
        </View>
        <View>
          <Text style={styles.profileText}>Please login into you account.</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.profileBtn}>
            <Text style={{color: COLORS.lightWhite}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  row1: {
    height: "30%",
    // backgroundColor: 'red'
  },

  row2: {
    height: "70%",
    // backgroundColor: "blue",
  },

  imageContainer: {
    width: "100%",
    height: "100%",
  },

  image: {
    resizeMode: "cover",
    // aspectRatio: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },

  profileText: {
    fontFamily: "semibold",
    textAlign: "center",
    paddingVertical: 12,
  },

  profileBtn:{
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.primary,
    width: "30%",
    alignItems:'center',
    
    
  }
});
