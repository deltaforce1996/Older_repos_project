import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import SwitchSelector from 'react-native-switch-selector';
import options from './../../Controller/options';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import {registerUser} from '../../Controller/fetchUser';
import ShowSnackBar from '../../Component/SnackBar';
import ShowProgress from '../../Component/Progress';
// import Loader from "react-native-modal-loader";

var {width, height} = Dimensions.get('window');

const optionsTitle = {
  title: 'My Pic App',
  takePhotoButtonTitle: 'Take photo with your camera',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
};

class createNewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: 0,
      avatarSource: null,
      pic: null,
      userID: '',
      userName: '',
      childName: '',
      age: 0,
      gender: '',
      isLoading: false,
      show: false,
      result: '',
      IsShow: false,
    };
  }

  componentDidMount() {
    this.setState({gender: 'Male'});
  }

  onRequestClose() {
    this.setState({IsShow: false});
  }

  handleNext = text => {
    this.props.navigation.navigate(text);
  };

  handleClose = () => {
    this.setState({show: false});
  };

  handleRegister = () => {
    this.setState({IsShow: true});
    registerUser(
      this.state.userID,
      this.state.userName,
      this.state.childName,
      this.state.age,
      this.state.gender,
    ).then(result => {
      this.setState({IsShow: false});

      if (result == 'บันทึกข้อมูลสำเร็จ') {
        ShowSnackBar(result, 'success');
        this.handleNext('loginPage');
      } else {
        ShowSnackBar(result, 'danger');
      }
    });
    // getAllUser().then((movie)=>{
    //   console.warn(movie)
    // })
  };

  handleSection = value => {
    this.setState({gender: value});
  };

  render() {
    return (
      <View style={styles.container}>
        <ShowProgress IsShow={this.state.IsShow} />
        {/* <Loader loading={this.state.IsShow} size="large" title="รอ.." color="red"/> */}
        <SCLAlert
          show={this.state.show}
          theme="info"
          title="Lean"
          onRequestClose={this.handleClose}
          subtitle={this.state.result}>
          <SCLAlertButton theme="info" onPress={this.handleClose}>
            Done
          </SCLAlertButton>
        </SCLAlert>
        <Image
          style={styles.fondo}
          source={require('./../../Assets/Images/background.jpg')}
        />
        <View style={styles.content}>
          <View
            style={{
              width: width,
              // marginTop: (height * 0.02) / 2,
              height: height * 0.1,
              /*backgroundColor:'blue',*/ justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={[styles.subtitle2, {color: 'white'}]}>
              CreateNew
            </Text>
            <Text style={[styles.subtitle2, {color: '#21BBDA',marginStart:width*0.025}]}>
              Person
            </Text>
          </View>

          <View
            style={{
              /*backgroundColor:'red',*/ justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: height * 0.02,
            }}>
            <TouchableOpacity
              style={{
                width: width * 0.3,
                height: height * 0.18,
                /*backgroundColor:'green',*/ marginBottom: height * 0.05,
              }}>
              <Image
                style={styles.avatar}
                /*source={this.state.avatarSource}*/ source={require('./../../Assets/Images/user.png')}
              />
            </TouchableOpacity>

            <View style={styles.inputContainer}>
              {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/> */}
              <TextInput
                style={styles.inputs}
                placeholder="Email/Phone/UserName"
                placeholderTextColor="white"
                keyboardType="ascii-capable"
                onChangeText={text => this.setState({userID: text})}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainer}>
              {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/> */}
              <TextInput
                style={styles.inputs}
                placeholder="ชื่อ-สกุล ผู้ปกครอง"
                placeholderTextColor="white"
                keyboardType="ascii-capable"
                secureTextEntry={false}
                onChangeText={text => this.setState({userName: text})}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputContainer}>
              {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/> */}
              <TextInput
                style={styles.inputs}
                placeholder="ชื่อ-สกุล บุตร"
                placeholderTextColor="white"
                keyboardType="ascii-capable"
                secureTextEntry={false}
                onChangeText={text => this.setState({childName: text})}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputContainer}>
              {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/> */}
              <TextInput
                style={styles.inputs}
                placeholder="อายุ"
                placeholderTextColor="white"
                keyboardType="ascii-capable"
                secureTextEntry={false}
                onChangeText={text => this.setState({age: text})}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={{flexDirection: 'column'}}>
              <Text style={[styles.subtitle, {marginTop: 5}]}>เพศ</Text>
              <SwitchSelector
                buttonColor="#21BBDA"
                style={{width: width*0.7, marginTop: height*0.02}}
                options={options}
                initial={this.state.switchValue}
                onPress={this.handleSection.bind()}
              />
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
                  onPress={this.handleNext.bind(this, 'loginPage')}
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
                คุณต้องการกลับไปหน้าเข้าสู่ระบบ?
              </Text>
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: height*0.02,
              }}>
              <TouchableHighlight
                onPress={this.handleRegister.bind(this)}
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>บันทึก</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default createNewPage;
