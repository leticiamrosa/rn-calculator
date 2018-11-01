import React from "react";
import { Text, View, TouchableHighlight } from "react-native";

import styles from "../styles/styles";

export default props => {
  // Se houve a propriedade double, adiciona no array de styles, adiciona classe nova
  const stylesButton = [styles.button];
  if (props.double) stylesButton.push(styles.buttonDouble);
  if (props.triple) stylesButton.push(styles.buttonTriple);
  if (props.operation) stylesButton.push(styles.operationButton);

  return (
    <TouchableHighlight onPress={props.onPress}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};
