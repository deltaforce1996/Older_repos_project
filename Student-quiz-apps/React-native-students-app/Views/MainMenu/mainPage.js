import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  FlatList,
  StatusBar,
  Linking,
  BackHandler,
  Alert,
  TouchableWithoutFeedback
} from "react-native";
import styles from "./styles";
// import options from './../../Controller/typesOptions';
import {
  Card,
  CardItem,
  Thumbnail,
  Button,
  Text,
  Left,
  Fab,
  Body,
  Right,
  Icon
} from "native-base";
import TypeProblem from "../../Controller/fetchUser";
// import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import ShowSnackBar from "../../Component/SnackBar";
import ShowProgress from "../../Component/Progress";

var { width, height } = Dimensions.get("window");

let arrayType = [];

class mainPage extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      switchValue: 0,
      isLoading: true,
      refreshing: false,
      result: this.props.navigation.state.params.result,
      array: [],
      arrayToList: [],
      active: false,
      IsShow: false
    };
  }

  makeRequest = () => {
    TypeProblem.GetMyAccountType(this.state.result[0].Child_ID).then(
      resultOfScore => {
        arrayType = resultOfScore.result;

        //console.warn(''+ arrayType[0].Score_Group_First+' '+arrayType[0].Score_Group_Second +' ' +arrayType[0].Score_Group_Third)
        TypeProblem.getTypeOnDB(
          arrayType[0].Type_ID_No_Frist,
          arrayType[0].Type_ID_No_Second,
          arrayType[0].Type_ID_No_Third
        ).then(result => {
          if (!result.error) {
            this.setState({ array: result });
            // console.warn(result)
          }
        });
      }
    );
  };

  componentWillMount() {
    this.makeRequest();
    // console.warn(this.state.result[0].User_ID.toString());
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    // this.backHandler.remove();
  }

  handleBackButtonClick() {
    Alert.alert(
      "แจ้งเตือน",
      "คุณต้องการออกจากระบบหรือไม่ ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => this.props.navigation.navigate("loginPage")
        }
      ],
      { cancelable: false }
    );
    // this.props.navigation.navigate('loginPage')
    return true;
  }

  handleDelAccount = () => {
    Alert.alert(
      "แจ้งเตือน",
      "คุณต้องการลบบัญชีนี้หรือไม่ ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => this.DelAccountApi()
        }
      ],
      { cancelable: false }
    );
    // this.props.navigation.navigate('loginPage')
    return true;
  };

  DelAccountApi = () => {
    this.setState({ IsShow: true });
    TypeProblem.DeleteAccount(
      this.state.result[0].Child_ID,
      this.state.result[0].Score_ID,
      this.state.result[0].User_ID
    ).then(result => {
      if (result == "ลบบัญชีสำเร็จ") {
        this.setState({ IsShow: false });
        this.props.navigation.navigate("loginPage");
      } else {
        this.setState({ IsShow: false });
        ShowSnackBar("โปรดลองใหม่อีกครั้ง", "warning");
      }
    });
  };

  handleClikMenu = () => {
    if (Platform.OS === "ios") {
      Linking.openURL("calshow:");
    } else if (Platform.OS === "android") {
      Linking.openURL("content://com.android.calendar/time/");
    }
  };

  handleItemClick = name => {
    // Alert.alert(name);
    this.props.navigation.navigate("webPage", { result: name });
  };

  handleItemClickHistory = () => {
    this.props.navigation.navigate("HistoryPage", {
      result: this.state.result[0].Child_ID
    });
  };

  rowRenderer = data => {
    const { Type_ID, Type_Name, Type_URL } = data.item;
    return (
      <TouchableWithoutFeedback
        onPress={this.handleItemClick.bind(this, Type_URL)}
      >
        <Card
          style={{
            width: width * 0.95,
            shadowColor: "#000",
            shadowOpacity: 0.36,
            elevation: 8,
            justifyContent: "center",
            marginLeft: width * 0.03
          }}
        >
          <CardItem>
            <Left>
              <Thumbnail source={require("../../Assets/Images/user.png")} />
              <Body>
                <Text>{Type_Name}</Text>
                <Text note style={{ flexWrap: "wrap" }} numberOfLines={1}>
                  {Type_URL}
                </Text>
              </Body>
            </Left>
            <Right>
              <Body style={{ marginLeft: width * 0.12 }}>
                <Button
                  onPress={this.handleItemClick.bind(this, Type_URL)}
                  rounded
                  danger
                >
                  <Text
                    style={{
                      /*fontFamily: 'Action_Man',*/ fontSize: height * 0.017
                    }}
                  >
                    ReadMore
                  </Text>
                </Button>
              </Body>
            </Right>
          </CardItem>
          <CardItem
            cardBody
            bordered
            style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
          >
            <Image
              source={require("../../Assets/Images/chinh.jpg")}
              style={{ height: height * 0.3, flex: 1 }}
            />
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>
    );
  };

  ListEmpty = () => {
    return (
      <View style={{ justifyContent: "center", flex: 1, width: width }}>
        <StatusBar translucent={false} hidden={false} backgroundColor="gray" />
        <ShowProgress IsShow={this.state.IsShow} />
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            height: height * 0.05
          }}
        >
          ยินดีด้วยคุณอยู่ในเกณฑ์ปกติ
        </Text>
        <Image
          style={{
            width: width * 0.35,
            marginTop: height * 0.1,
            marginLeft: width * 0.32,
            justifyContent: "center",
            height: height * 0.2
          }}
          source={require("../../Assets/Images/like.png")}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent={false}
          hidden={false}
          backgroundColor="mediumseagreen"
        />
        <View
          style={{ width: "100%", height: "110%", marginTop: height * 0.1 }}
        >
          <View
            style={{
              backgroundColor: "#21BBDA",
              height: height * 0.1,
              width: width
            }}
          ></View>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={require("../../Assets/Images/user.png")}
            />
            <View style={{ flexDirection: "column", marginTop: height * 0.06 }}>
              <Text
                style={
                  (styles.name,
                  {
                    marginTop: height * 0.04,
                    marginStart: width * 0.05,
                    color: "white"
                  })
                }
              >
                {this.state.result[0].Child_Information}
              </Text>
              <Text style={[styles.subtitle],{ marginStart: width * 0.05,}}>
                {this.state.result[0].User_Information}
              </Text>
            </View>
            <Button
              rounded
              danger
              style={{
                backgroundColor: "red",
                marginTop: height * 0.1,
                width: width * 0.15,
                height: height * 0.085,
                marginStart: width * 0.12
              }}
              onPress={this.handleDelAccount.bind(this)}
            >
              <Icon name="trash" />
            </Button>
          </View>
          <FlatList
            style={{ width: width /*backgroundColor: 'lightgray'*/,marginTop: height*0.03, height:height*0.25}}
            data={this.state.array}
            renderItem={this.rowRenderer}
            keyExtractor={item => item.Type_ID}
            ListEmptyComponent={this.ListEmpty()}
            // refreshControl={
            //   <RefreshControl
            //     refreshing={this.state.refreshing}
            //     onRefresh={this.handleRefresh.bind(this)}
            //   />
            // }
          />
        </View>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "orange" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="grid" />
          <Button
            style={{ backgroundColor: "#34A34F" }}
            onPress={this.handleClikMenu.bind(this)}
          >
            <Icon name="calendar" />
          </Button>
          <Button
            style={{ backgroundColor: "#3B5998" }}
            onPress={this.handleItemClickHistory.bind(this)}
          >
            <Icon name="book" />
          </Button>
        </Fab>
      </View>
    );
  }
}

export default mainPage;
