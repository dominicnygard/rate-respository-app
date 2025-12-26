import { View, StyleSheet } from "react-native";
import { Menu, Button } from "react-native-paper";
import { useState } from "react";
import theme from "../../theme";

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  menu: {
    color: theme.colors.textPrimary,
    backgroundColor: theme.colors.textThird,
  },
});

const SorterPicker = ({ setSorting }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={
          <Button
            textColor={theme.colors.textPrimary}
            mode="outlined"
            icon="sort"
            onPress={() => setVisible(true)}
          >
            Sort repositories
          </Button>
        }
        contentStyle={styles.menu}
      >
        <Menu.Item
          title="Latest repositories"
          onPress={() => {
            setSorting({ orderBy: "CREATED_AT", orderDirection: "DESC" });
            setVisible(false);
          }}
        />
        <Menu.Item
          title="Highest rated repositories"
          onPress={() => {
            setSorting({ orderBy: "RATING_AVERAGE", orderDirection: "DESC" });
            setVisible(false);
          }}
        />
        <Menu.Item
          title="Lowest rated repositories"
          onPress={() => {
            setSorting({ orderBy: "RATING_AVERAGE", orderDirection: "ASC" });
            setVisible(false);
          }}
        />
      </Menu>
    </View>
  );
};

export default SorterPicker;
