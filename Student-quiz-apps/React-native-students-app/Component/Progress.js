import React, { Component } from "react";
import { StyleSheet,View } from "react-native";
import Loader from "react-native-modal-loader";

export default class Progress extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.props.IsShow} size="large" title="รอ.." color="red"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  subtitle: {
    fontSize: 15,
    marginTop: -15,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'normal',
  },
});

