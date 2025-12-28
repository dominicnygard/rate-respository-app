import { FlatList, View, StyleSheet } from "react-native";
import * as React from "react";
import SorterPicker from "./SorterPicker";
import RepositoryInfo from "../RepositoryItem/RepositoryInfo";
import useRepositories from "../../hooks/useRepositories";
import { useState } from "react";
import SearchBar from "./SearchBar";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;

    return (
      <>
        <SearchBar
          searchQuery={props.searchQuery}
          setSearchQuery={props.setSearchQuery}
        />
        <SorterPicker setSorting={props.setSorting} />
      </>
    );
  };

  render() {
    const props = this.props;

    const repositoryNodes = props.repositories
      ? props.repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <RepositoryInfo item={item} singleView={false} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={props.onEndReach}
        onEndReachedThreshold={0.5}
        initialNumToRender={repositoryNodes.length}
      />
    );
  }
}

const RepositoryList = () => {
  const [sorting, setSorting] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const [searchKeyword, setSearchKeyword] = useState("");
  const { repositories, fetchMore } = useRepositories({
    searchKeyword,
    first: 8,
    ...sorting,
  });

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      setSorting={setSorting}
      searchQuery={searchKeyword}
      setSearchQuery={setSearchKeyword}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
