import React, { Component } from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";

import PlaceList from "./src/components/PlaceList";

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
    const { places } = this.state;
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
        <PlaceList places={places} />
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
