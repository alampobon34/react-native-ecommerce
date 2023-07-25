import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/index";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import SearchCardView from "../components/search/SearchCardView";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  const handlePress = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${searchKey}`
      );
      setSearchResult(res.data.products);
      console.log(searchResult);
      // setSearchKey("");
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for?"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather
              name="search"
              size={SIZES.xLarge}
              color={COLORS.lightWhite}
              onPress={() => handlePress()}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchResult.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image style={styles.searchImage} source={require("../assets/images/Pose23.png")} />
        </View>
      ) : (
        <FlatList data={searchResult}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (<View style={{padding: 2}}></View>)}
        renderItem={({item}) => <SearchCardView item={item}/>}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.small,
    height: 50,
  },

  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },

  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },

  searchImage:{
    resizeMode: 'contain',
    width: SIZES.width-80,
    height: SIZES.height-300,
    opacity: 0.9
  }
});
