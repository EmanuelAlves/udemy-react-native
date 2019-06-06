import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Button, Text} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: '',
    places: []

  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeButtonHander = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState((prevState) => ({
      places: prevState.places.concat(prevState.placeName),
      placeName: ''
    }));
  };
  
  render() {
    
    const placesOutput = this.state.places.map( (a, i) => 
      <Text key={i}>{a}</Text>
    );
    console.log(this.state.places);
    console.log(placesOutput);
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.placeInput} 
            value={this.state.placeName}
            placeholder="An awesome place"
            onChangeText={ e => this.placeNameChangeHandler(e)}></TextInput>
          <Button style={styles.placeButton} title="Add" 
            onPress={this.placeButtonHander}></Button>
        </View>
        <View>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: "flex-start",
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent:"space-between"
  },
  placeInput: {
   width: "70%"
  },
  placeButton: {
    width: "30%"
  },
});
