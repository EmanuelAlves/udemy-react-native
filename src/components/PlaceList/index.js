import React from "react";
import { View } from "react-native";
import ListItem from "./ListItem";

const placeList = props => {
  const placesOutput = props.places.map((place, i) => {
    <ListItem key={i} placeName={place} />;
  });

  return <View>{placesOutput}</View>;
};

export default placeList;
