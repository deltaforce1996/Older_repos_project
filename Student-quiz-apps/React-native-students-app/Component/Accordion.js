import React, { Component } from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import { Card, Button, CardItem, Icon } from "native-base";
var {width, height} = Dimensions.get('window');
export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false
    };
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <View>
        <Card style={this.state.expanded ? styles.child : styles.item}>
          <View style={styles.itemBox}>
            <Text
              numberOfLines={1}
              style={this.state.expanded ? styles.titleHover : styles.title}
            >
              {this.props.data}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={
                  this.state.expanded ? styles.subtitleHover : styles.subtitle
                }
              >
                {this.props.title}
              </Text>
              <Text
                style={this.state.expanded ?[
                  styles.subtitleHover,
                  { justifyContent: "center", width:80, marginLeft:-30 }
                ]:[
                    styles.subtitle,
                    { justifyContent: "center", width:80, marginLeft:-30 }
                  ]}
              >
                {this.props.Time}
              </Text>
            </View>
            <View
              style={[
                {
                  flexDirection: "column",
                  backgroundColor: "tranparent",
                  width: 250,
                  marginTop: 5
                }
              ]}
            >
              {this.state.expanded ? (
                <View>
                  <View
                    style={{
                      width: 250,
                      backgroundColor: "lightgray",
                      height: 1
                    }}
                  />
                  <View style={{ height: 90 }}>
                      <View style={{flexDirection: 'row',padding:10}}>
                      <Text
                      style={
                        this.state.expanded
                          ? [styles.subtitleHover,{marginLeft:10,width:60}]
                          : styles.subtitle
                      }
                    >
                      {this.props.scoreOne}
                    </Text>
                    <Text numberOfLines={1}
                      style={
                        this.state.expanded
                          ? [styles.subtitleHover,{marginLeft:10,width:170}]
                          : styles.subtitle
                      }
                    >
                      {this.props.TypeOne}
                    </Text>
                      </View>
                      <View style={{flexDirection: 'row',padding:10}}>
                      <Text
                      style={
                        this.state.expanded
                          ? [styles.subtitleHover,{marginLeft:10,width:60}]
                          : styles.subtitle
                      }
                    >
                      {this.props.scoreTwo}
                    </Text>
                    <Text numberOfLines={1}
                      style={
                        this.state.expanded
                          ? [styles.subtitleHover,{marginLeft:10,width:170}]
                          : styles.subtitle
                      }
                    >
                      {this.props.TypeTwo}
                    </Text>
                      </View>
                      <View style={{flexDirection: 'row',padding:10}}>
                      <Text
                      style={
                        this.state.expanded
                          ? [styles.subtitleHover,{marginLeft:10,width:60}]
                          : styles.subtitle
                      }
                    >
                      {this.props.scoreThree}
                    </Text>
                    <Text numberOfLines={1}
                      style={
                        this.state.expanded
                          ? [styles.subtitleHover,{marginLeft:10,width:170}]
                          : styles.subtitle
                      }
                    >
                      {this.props.TypeThree}
                    </Text>
                      </View>
                  </View>
                  <View
                    style={{
                      width: 250,
                      backgroundColor: "lightgray",
                      height: 1,
                      marginTop:40
                    }}
                  />
                </View>
              ) : null}
            </View>
          </View>
          <Button
            dark
            style={styles.buttonEx}
            onPress={() => this.toggleExpand()}
          >
            <Icon name={this.state.expanded ? "arrow-down" : "arrow-forward"} />
          </Button>
        </Card>
        {/* <View>
        {
            this.state.expanded &&
            <View style={styles.child}>
                <Text>{this.props.data}</Text>    
            </View>
        }
    </View> */}
      </View>

      //         <Card>
      //         <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
      //             <Text style={[styles.titles, styles.font]}>{this.props.title}</Text>
      //             <Icon name={this.state.expanded ? 'arrow-forward' : 'arrow-down'} size={30} color={'gray'} />
      //         </TouchableOpacity>
      //         <View style={styles.parentHr}/>
      //         {
      //             this.state.expanded &&
      //             <View style={styles.child}>
      //                 <Text>{this.props.data}</Text>
      //             </View>
      //         }
      //    </Card>
    );
  }
}

const styles = StyleSheet.create({
  // titles:{
  //     fontSize: 14,
  //     fontWeight:'bold',
  //     color: 'black',
  // },
  // row:{
  //     flexDirection: 'row',
  //     justifyContent:'space-between',
  //     height:56,
  //     paddingLeft:25,
  //     paddingRight:18,
  //     alignItems:'center',
  //     backgroundColor:'gray',
  // },
  // parentHr:{
  //     height:1,
  //     color: 'white',
  //     width:'100%'
  // },

  child: {
    backgroundColor: "#9AA8C8",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    marginLeft: 10,
    width: width*0.9,
    marginRight: 10,
    height: height*0.40
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 8,
    marginLeft: 10,
    width: width*0.9,
    marginRight: 10,
    height: height*0.15
  },
  title: {
    flexWrap: "wrap",
    fontSize: 18,
    justifyContent: "flex-start",
    marginTop: 2,
    width: width*0.52,
    alignItems: "center"
  },
  titleHover: {
    flexWrap: "wrap",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    justifyContent: "flex-start",
    marginTop: 2,
    width: width*0.52,
    alignItems: "center"
  },
  subtitleHover: {
    flexWrap: "wrap",
    fontSize: 16,
    justifyContent: "flex-start",
    marginTop: 2,
    color: "white",
    width: width*0.60,
    alignItems: "center"
  },
  subtitle: {
    flexWrap: "wrap",
    fontSize: 16,
    justifyContent: "flex-start",
    marginTop: 2,
    color: "gray",
    width: width*0.60,
    alignItems: "center"
  },
  buttonEx: {
    width: width*0.16,
    height: height*0.09,
    borderRadius: width*0.4,
    backgroundColor: "#21BBDA",
    justifyContent: "center",
    marginTop: -5,
    marginStart: -5
  },
  itemBox: {
    borderRadius: 8,
    flexDirection: "column"
  }
});
