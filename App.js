import React, { Component } from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";

import ListItem from "./src/components/ListItem";

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => ({
      places: prevState.places.concat(prevState.placeName),
      placeName: ""
    }));
  };

  render() {
    const placesOutput = this.state.places.map((a, i) => (
      <ListItem key={i} placeName={a} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            value={this.state.placeName}
            placeholder="An awesome place"
            onChangeText={e => this.placeNameChangeHandler(e)}
          />
          <Button
            style={styles.placeButton}
            title="Add"
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: "flex-start",
    backgroundColor: "#F5FCFF"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%",
    backgroundColor: "#AAA"
  }
});
