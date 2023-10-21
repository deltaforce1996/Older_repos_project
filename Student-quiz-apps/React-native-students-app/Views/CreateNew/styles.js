import {Dimensions} from 'react-native';

var {width, height} = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo: {
    width: width,
    height: height,
    position: 'absolute',
  },
  content: {
    width: width,
    height: height,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  title: {
    fontFamily: 'Script MT Bold',
    fontSize: height*0.04,
    textAlign: 'center',
    color: 'white',
    fontWeight: '900',
  },
  subtitle: {
    fontSize: height*0.03,
    marginTop: height*0.2,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'normal',
  },
  subtitle2: {
    fontSize: height*0.04,
    textAlign: 'center',
    marginTop: height*0.04,
    fontWeight: 'bold',
  },
  Text: {
    fontSize: height*0.1,
    color: 'white',
  },
  BorderContent: {
    width: width,
    height: height*0.2,
    backgroundColor: 'rgba(200,200,200,.2)',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
  },
  inputContainer: {
    borderBottomColor: 'white',
    backgroundColor: 'tranparent',
    borderBottomWidth: height*0.002,
    width: width*0.8,
    height: height*0.03,
    marginBottom: height*0.05,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  inputs: {
    height: height*0.1,
    marginLeft: width*0.03,
    color:'white',
    borderBottomColor: '#FFFFFF',
    flex: 3,
  },
  inputIcon: {
    width: width*0.1,
    height: width*0.03,
    marginLeft: width*0.03,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
  avatar: {
    width: width*0.3,
    height: width*0.3,
    borderRadius: width*0.15,
    borderWidth: width*0.01,
    borderColor: 'white',
    marginBottom: height*0.001,
  }
};

export default styles;
