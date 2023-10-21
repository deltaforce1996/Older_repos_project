import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  YellowBox,
} from 'react-native';
import styles from './styles';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import ShowProgress from '../../Component/Progress';
import {Login} from '../../Controller/fetchUser';
import ShowSnackBar from '../../Component/SnackBar';

var {width, height} = Dimensions.get('window');


export default class LoginPage extends Component {
  constructor(props) {
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

    super(props);
    this.state = {
      show: false,
      IsShow: false,
      userID: '',
      data: '',
      result:''
    };
  }

  componentDidMount() {
    this.OpenLog();
  }

  OpenLog = () => {
    this.setState({show: true});
  };

  handleClose = () => {
    this.setState({show: false});
  };

  handleNext = text => {
    this.props.navigation.navigate(text,{result:this.state.result});
  };

  handleLogIn = input => {
    if (input == '') {
      ShowSnackBar("โปรดใส่ข้อมูลให้ถูกต้อง", 'warning');

      return;
    }

    this.setState({IsShow: true});

    Login(input).then(result => {
      this.setState({IsShow: false});
      this.setState({ data: result, result:result.result });
      if (this.state.data.message == 'เข้าสู่ระบบสำเร็จ') {
        ShowSnackBar(this.state.data.message, 'success');
        this.handleNext('quizPage');
      } else {
        ShowSnackBar(this.state.data.message, 'danger');
      }
    });
  };

  render() {
    return (
        <View style={styles.container}>
          <StatusBar translucent={false} hidden={false} backgroundColor='gray' />
          <ShowProgress IsShow={this.state.IsShow} />
          <Image
            style={styles.fondo}
            source={require('./../../Assets/Images/background.jpg')}
          />
          <SCLAlert
            show={this.state.show}
            theme="info"
            title="Lean"
            onRequestClose={this.handleClose}
            subtitle="แอพพลิเคชั่นนี้จัดทำขึ้นเพื่อให้ความรู้แก่ผู้ปกครองเด็กสมาธิสั้น">
            <SCLAlertButton theme="info" onPress={this.handleClose}>
              Done
            </SCLAlertButton>
          </SCLAlert>
          <View style={styles.content}>
            <View
              style={{
                width: width,
                height: height * 0.8,
                justifyContent: 'center',
              }}>
              <Text style={styles.title}>ADHD HELPER</Text>
              <Text style={styles.subtitle}>SRU Helper Mini Project</Text>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: height*0.2,
                }}>
                <View style={styles.inputContainer}>
                  <Image
                    style={styles.inputIcon}
                    source={{
                      uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db',
                    }}
                  />

                  <TextInput
                    style={styles.inputs}
                    placeholder="Email/Phone/UserName"
                    placeholderTextColor="white"
                    keyboardType="ascii-capable"
                    onChangeText={text => this.setState({userID: text})}
                    secureTextEntry={false}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: height*0.001,
                }}>
                <TouchableHighlight
                  onPress={this.handleLogIn.bind(this, this.state.userID)}
                  style={[styles.buttonContainer, styles.loginButton]}>
                  <Text style={styles.loginText}>เข้าสู่ระบบ</Text>
                </TouchableHighlight>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: height*0.01,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity>
                  <Text
                    onPress={this.handleNext.bind(this, 'createNewPage')}
                    style={{
                      textDecorationLine: 'underline',
                      color: 'white',
                      fontWeight: '600',
                      marginRight: width*0.03,
                    }}>
                    Click Here
                  </Text>
                </TouchableOpacity>
                <Text style={styles.loginText}>
                  คุณต้องการลงทะเบียนใหม่หรือไม่ ?
                </Text>
              </View>
            </View>

            <View style={{width: width, height: height * 0.2}}>
              <View style={styles.BorderContent}>
                <Text style={styles.Text}>Support By</Text>
              </View>
            </View>
          </View>
        </View>
    );
  }
}
