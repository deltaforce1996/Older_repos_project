import React, {Component} from 'react';
import {View, Text,Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
var {width, height} = Dimensions.get('window');
export default class webPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.navigation.state.params.result,
      IsShow: false,
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1,marginTop:height*0.13}}>
        <WebView
          source={{uri: this.state.result}}
          startInLoadingState={true}
        />
        </View>
        
      </View>
    );
  }
}
