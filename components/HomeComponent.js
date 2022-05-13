import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, Image } from "react-native-elements";
import { DOGS } from "../shared/dogs";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";

function RenderItem({ item }) {
  if (item) {
    return (
      <Card>
        <Text style={{ margin: 10 }}>{item.name}</Text>
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
        <Card
          featuredTitle={this.state.dogs[0].name}
          image={require("./images/react-lake.jpg")}
        >
          <Text style={{ margin: 10 }}>{this.state.dogs.description}</Text>
          <Image
            source={{ url: "./images/qr.png" }}
            style={{ width: 225, height: 225 }}
          ></Image>
          <Text style={{ margin: 10 }}>
            Total Met: {this.state.dogs.length}
          </Text>
        </Card>
        <Text style={{ margin: 10 }}>Recently Met:</Text>
        <RenderItem item={this.state.dogs[this.state.dogs.length - 1]} />
        <RenderItem item={this.state.dogs[this.state.dogs.length - 2]} />
        <RenderItem item={this.state.dogs[this.state.dogs.length - 3]} />
      </ScrollView>
    );
  }
}
