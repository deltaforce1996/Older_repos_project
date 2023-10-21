import { Dimensions } from 'react-native';

var {width,height} = Dimensions.get('window')

const styles = {
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fondo:{
        width:width,
        height:height,
        position:'absolute'
    },
    content:{
        width:width,
        height:height,
        flexDirection: 'column',
        backgroundColor:'rgba(0,0,0,.5)'
    },
    title:{
        fontSize: height*0.09,
        textAlign: 'center',
        color:'white',
        fontWeight: '900',
    },
    subtitle:{
        fontSize:height*0.03,
        marginTop: height*0.0008,
        color:'white',
        textAlign:'center',
        fontWeight: 'normal',
    },
    Text:{
        fontSize: height*0.03,
        color:'white',
    },
    BorderContent:{
        width:width,
        height:height*0.06,
        backgroundColor:'rgba(200,200,200,.2)',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign:'center',
        flexDirection: 'row',
    },
    inputContainer: {
        borderBottomColor: 'transparent',
        backgroundColor:'rgba(200,200,200,.2)',
        borderRadius:30,
        borderBottomWidth: 1,
        width:width*0.85,
        height:height*0.08,
        marginBottom:height*0.008,
        justifyContent:'center',
        flexDirection: 'row',
        alignItems:'center',
        textAlign:'center',
    },
    inputs:{
        height:height*0.45,
        marginLeft:width*0.005,
        borderBottomColor: '#FFFFFF',
        flex:1,
        color:'#FFFFFF'
    },
    inputIcon:{
      width:width*0.05,
      height:height*0.03,
      marginLeft:width*0.08,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:height*0.07,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:height*0.04,
      width:width*0.85,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    }
 }
 
 export default styles;