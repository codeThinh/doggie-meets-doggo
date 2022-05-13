import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { DOGS } from "../shared/dogs";

export default class Doggos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: DOGS,
    };
  }

  static navigationOptions = {
    title: "Doggos",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDoggosItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate("DogInfo", { dogId: item.id })}
          rightAvatar={{ source: require("./images/react-lake.jpg") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.dogs}
        renderItem={renderDoggosItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}
