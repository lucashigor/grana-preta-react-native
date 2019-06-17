import React from 'react'
import { Component } from 'react';
import {Platform, Button, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export interface Props {
  name: string
  enthusiasmLevel?: number
  onIncrement?: () => void
  onDecrement?: () => void
}

interface State {
  enthusiasmLevel: number
}
export default class App extends Component<Props, State> {
	public constructor(props: Props) {
    super(props)

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1
    }
	}
	
	onIncrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
  onDecrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 });
	getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!")
	
  render() {
		return (
    <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello {this.props.name + this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row",
    minHeight: 70,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: "#999",
    fontWeight: "bold"
  },
});