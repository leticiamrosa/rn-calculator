import React, { Component } from "react";
import { Text, View } from "react-native";
import Button from "./src/components/Button";
import Display from "./src/components/Display";

import styles from "./src/styles/styles";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    };
  }

  addDigit(n) {
    // Permite apenas um . por display
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }

    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;

    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values });
    }
  }

  clearMemory() {
    this.setState({
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    });
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '=';
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }
      values[1] = 0;
      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        // limpa sempre o display apos efetuar o operation
        clearDisplay: true,
        values,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.content}>
          <Button label="AC" triple onPress={() => this.clearMemory()} />
          <Button label="/" operation onPress={() => this.setOperation("/")} />
          <Button label="7" onPress={() => this.addDigit(7)} />
          <Button label="8" onPress={() => this.addDigit(8)} />
          <Button label="9" onPress={() => this.addDigit(9)} />
          <Button label="*" operation onPress={() => this.setOperation("*")} />
          <Button label="4" onPress={() => this.addDigit(4)} />
          <Button label="5" onPress={() => this.addDigit(5)} />
          <Button label="6" onPress={() => this.addDigit(6)} />
          <Button label="-" operation onPress={() => this.setOperation("-")} />
          <Button label="1" onPress={() => this.addDigit(1)} />
          <Button label="2" onPress={() => this.addDigit(2)} />
          <Button label="3" onPress={() => this.addDigit(3)} />
          <Button label="+" operation onPress={() => this.setOperation("+")} />
          <Button label="0" double onPress={() => this.addDigit(0)} />
          <Button label="." onPress={() => this.addDigit(".")} />
          <Button label="=" operation onPress={() => this.setOperation("=")} />
        </View>
      </View>
    );
  }
}
