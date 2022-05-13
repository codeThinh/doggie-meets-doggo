import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { DOGS } from "../shared/dogs";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";

function RenderItem({ item }) {
  if (item) {
    return (
      <Card
        featuredTitle={item.name}
        image={require("./images/react-lake.jpg")}
      >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: DOGS,
      promotions: PROMOTIONS,
      partners: PARTNERS,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <ScrollView>
        <Text>Recently Met:</Text>
        <RenderItem item={this.state.dogs[this.state.dogs.length - 1]} />
        <RenderItem item={this.state.dogs[this.state.dogs.length - 2]} />
        <RenderItem item={this.state.dogs[this.state.dogs.length - 3]} />
      </ScrollView>
    );
  }
}
