import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

const styles = StyleSheet.create({
  shadowContainer: {
    marginVertical: 8,
    marginHorizontal: 8,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 5,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  searchbar: {
    borderRadius: 12,
    backgroundColor: "#fff",
  },
});

const SearchBar = ({ setSearchQuery, searchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  const debouncedSetSearchQuery = useDebouncedCallback((value) => {
    setSearchQuery(value);
  }, 500);

  const onChangeText = (text) => {
    setInputValue(text);
    debouncedSetSearchQuery(text);
  };

  return (
    <View style={styles.shadowContainer}>
      <Searchbar
        style={styles.searchbar}
        placeholder="Search"
        onChangeText={onChangeText}
        value={inputValue}
      />
    </View>
  );
};

export default SearchBar;
