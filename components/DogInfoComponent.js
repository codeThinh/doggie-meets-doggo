import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { DOGS } from "../shared/dogs";

function RenderDog({ dog }) {
  if (dog) {
    return (
      <Card featuredTitle={dog.name} image={require("./images/react-lake.jpg")}>
        <Text style={{ margin: 10 }}>{dog.description}</Text>
      </Card>
    );
  }
  return <View />;
}

export default class DogInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: DOGS,
    };
  }

  static navigationOptions = {
    title: "Dog Information",
  };

  render() {
    const dogId = this.props.navigation.getParam("dogId");
    const dog = this.state.dogs.filter((dog) => dog.id === dogId)[0];
    return <RenderDog dog={dog} />;
  }
}
