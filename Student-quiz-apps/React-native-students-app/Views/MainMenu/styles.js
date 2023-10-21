import { Dimensions } from 'react-native';

var {width,height} = Dimensions.get('window')

const styles = {
    container:{
        flex:1,
    },
    content:{
        width:width,
        height:height,
        backgroundColor:'tranparent'
    },
    avatar: {
        width: width*0.26,
        height: height*0.145,
        borderRadius: width*0.11,
        marginTop: height*0.1,
        borderWidth: width*0.015,
        borderColor: "white",
        marginBottom:height*0.02,
    },
    header:{
        backgroundColor: "#21BBDA",
        // borderBottomRightRadius: 30,
      },
      headerContent:{
        padding:width*0.03,
        height:height*.2,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: - height*.15,
      },
      name:{
        fontSize:height*0.08,
        color:"#000000", 
        fontWeight:'bold',
        // fontFamily: "Action_Man",
      },
      subtitle:{
        fontSize:height*0.03,
        marginTop: height*0.008,
        color:'gray',
        textAlign:'center',
        fontWeight: 'normal',
        // fontFamily: "Action_Man",
    },
  container_text: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 12,
      justifyContent: 'center',
  }
}

export default styles