import React, { Component } from "react";
import Home from "./HomeComponent";
import Doggos from "./DoggosComponent";
import DogInfo from "./DogInfoComponent";
import Constants from "expo-constants";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

const DoggosNavigator = createStackNavigator(
  {
    Doggos: { screen: Doggos },
    DogInfo: { screen: DogInfo },
  },
  {
    initialRouteName: "Doggos",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const MainNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeNavigator },
    Doggos: { screen: DoggosNavigator },
  },
  {
    tabBackgroundColor: "#CEC8FF",
  }
);

const TabNavigator = createAppContainer(MainNavigator);

export default class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <TabNavigator />
      </View>
    );
  }
}
