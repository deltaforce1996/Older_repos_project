import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { Card, Button, CardItem, Icon } from "native-base";
import Accordion from "../../Component/Accordion";
import History from "../../Controller/fetchUser";

var { width, height } = Dimensions.get("window");

const DATA = [
  {
    id: "Jakkrit Bobtong",
    title: "15/15/2019",
    scoreOne: 15,
    scoreTwo: 15,
    scoreThree: 15,
    TypeOne: "Position One",
    TypeTwo: "Position Two",
    TypeThree: "Position Three",
    Time: "12:00:52"
  },
  {
    id: "Jakkrit Bobtong",
    title: "15/15/2019",
    scoreOne: 15,
    scoreTwo: 15,
    scoreThree: 15,
    TypeOne: "Position One",
    TypeTwo: "Position Two",
    TypeThree: "Position Three",
    Time: "12:00:52"
  },
  {
    id: "Jakkrit Bobtong",
    title: "15/15/2019",
    scoreOne: 15,
    scoreTwo: 15,
    scoreThree: 15,
    TypeOne: "Position One",
    TypeTwo: "Position Two",
    TypeThree: "Position Three",
    Time: "12:00:52"
  },
  {
    id: "Jakkrit Bobtong",
    title: "15/15/2019",
    scoreOne: 15,
    scoreTwo: 15,
    scoreThree: 15,
    TypeOne: "Position One",
    TypeTwo: "Position Two",
    TypeThree: "Position Three",
    Time: "12:00:52"
  },
  {
    id: "Jakkrit Bobtong",
    title: "15/15/2019",
    scoreOne: 15,
    scoreTwo: 15,
    scoreThree: 15,
    TypeOne: "Position One",
    TypeTwo: "Position Two",
    TypeThree: "Position Three",
    Time: "12:00:52"
  },
  {
    id: "Jakkrit Bobtong",
    title: "15/15/2019",
    scoreOne: 15,
    scoreTwo: 15,
    scoreThree: 15,
    TypeOne: "Position One",
    TypeTwo: "Position Two",
    TypeThree: "Position Three",
    Time: "12:00:52"
  },
  {
    id: "Jakkrit Bobtong",
    title: "15/15/2019",
    scoreOne: 15,
    scoreTwo: 15,
    scoreThree: 15,
    TypeOne: "Position One",
    TypeTwo: "Position Two",
    TypeThree: "Position Three",
    Time: "12:00:52"
  }
];

export default class HistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChildID: this.props.navigation.state.params.result,
      Datas: []
    };
  }

  componentWillMount() {
    this.makeRequest();
  }

  makeRequest = () => {
    // console.warn(this.state.ChildID);
    History.GetHistory(this.state.ChildID).then(resultJson => {
      if(!resultJson.error){
        this.setState({Datas:resultJson.result})
        console.warn(this.state.Datas);
      }else{
        // console.warn('Connect server failed !');
      }

    });
  };

  _renderHeader = data => {
    const { id, title } = data.item;
    return (
      <Card style={styles.item}>
        <View style={styles.itemBox}>
          <Text numberOfLines={1} style={[styles.title]}>
            {id}
          </Text>
          <Text style={styles.subtitle}>{title}</Text>
        </View>
        <Button dark style={styles.buttonEx}>
          <Icon name="arrow-forward" />
        </Button>
      </Card>
    );
  };

  renderAccordians = data => {
    const {
      id,
      title,
      scoreOne,
      scoreTwo,
      scoreThree,
      TypeOne,
      TypeTwo,
      TypeThree,
      Time
    } = data.item;
    return (
      <Accordion
        title={title}
        data={id}
        scoreOne={scoreOne}
        scoreTwo={scoreTwo}
        scoreThree={scoreThree}
        TypeOne={TypeOne}
        TypeTwo={TypeTwo}
        TypeThree={TypeThree}
        Time={Time}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* { this.renderAccordians() } */}
        <FlatList
          data={this.state.Datas}
          renderItem={this.renderAccordians}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    marginTop: height * 0.11
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    elevation: 8,
    marginLeft: 10,
    width: width * 0.5,
    marginRight: width * 0.01,
    height: height * 0.07
  },
  title: {
    flexWrap: "wrap",
    fontSize: 18,
    justifyContent: "flex-start",
    marginTop: 2,
    width: 190,
    alignItems: "center"
  },
  subtitle: {
    flexWrap: "wrap",
    fontSize: 16,
    justifyContent: "flex-start",
    marginTop: 2,
    color: "gray",
    width: 190,
    alignItems: "center"
  },
  buttonEx: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#21BBDA",
    justifyContent: "center",
    marginTop: 5,
    marginStart: 60
  },
  itemBox: {
    borderRadius: 8,
    flexDirection: "column"
  }
});
