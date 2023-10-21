import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  YellowBox,
  TouchableOpacity,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {Card, Button, ActionSheet} from 'native-base';
import {ViewPager} from 'rn-viewpager';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {InsertScore, UpdateScore} from '../../Controller/fetchUser';
import ShowProgress from '../../Component/Progress';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import lineNotify from '../../Controller/lineNotify';

var {width, height} = Dimensions.get('window');
const PAGES = ['Page 1', 'Page 2', 'Page 3'];

var BUTTONS = ['ไม่เลย', 'เล็กน้อย', 'ค่อนข้างมาก', 'มาก', 'ยกเลิก'];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#21BBDA',
  separatorUnFinishedColor: '#21BBDA',
  stepIndicatorFinishedColor: '#21BBDA',
  stepIndicatorUnFinishedColor: '#21BBDA',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#21BBDA',
};

export default class quizPage extends Component {
  constructor(props) {
    super(props);

    YellowBox.ignoreWarnings(['Warning: Failed prop type: Invalid prop']);

    this.state = {
      currentPage: 0,
      nextPage: 1,
      groupArray: [],
      inArray: [],
      IsHaveScoreID: false,
      show: false,
      typeThame: '',
      title: '',
      subtitle: '',
      Isdisablebtn: false,
      result: this.props.navigation.state.params.result,
      IsShow: false,
      tableHead: ['รายการ', 'ตอบ'],
      tableData1: [
        ['มักไม่ละเอียดรอบคอบหรือสะเพราะในการทำงานต่างๆ เช่น การบ้าน', '0'],
        ['ทำอะไรนานๆ ไม่ได้', '1'],
        ['ดูเหมือนไม่ค่อยฟังเวลามีคนพูดด้วย', '2'],
        ['มักทำการบ้านไม่เสร็จหรือทำงานที่มอบหมายไม่เสร็จ', '3'],
        ['จัดระเบียบและงานกิจกรรมต่างๆ ไม่เป็น', '4'],
        ['มักหลีกเลี่ยงกิจกรรมที่ใช้ความอดทนในการทำให้เสร็จ', '5'],
        ['ทำของหายบ่อยๆ เช่น ของเล่น สมุดจดงาน เครื่องเขียน', '6'],
        ['วอกแวก', '7'],
        ['ขี้ลืม', '8'],
      ],
      tableData2: [
        ['มือเท้ายุกยิก นั่งบิดไปบิดมา', '0'],
        [
          'นั่งไม่ติดที่ ชอบลุกจากที่นั่งในชั้นเรียนหรือจากที่ที่ต้องนั่งเรียบร้อย',
          '1',
        ],
        ['วิ่งหรือปีนป่ายมากเกินควรอย่างไม่รู้กาลเทศะ', '2'],
        ['เล่นหรือทำกิจกรรมเงียบๆ ไม่เป็น', '3'],
        ['พร้อมจะเคลื่อนไหวอยู่เสมอเหมือนติดเครื่องอยู่ตลอดเวลา', '4'],
        ['พูดมาก', '5'],
        ['มักโพล่งคำตอบออกมาก่อนฟังคำถามจบ', '6'],
        ['ไม่ชอบรอคิว', '7'],
        ['ชอบสอดแทรกผู้อื่น เช่น ชอบพูดแทรกระหว่างผู้ใหญ่กำลังสนทนากัน', '8'],
      ],
      tableData3: [
        ['อารมณ์เสียง่าย', '0'],
        ['ชอบโต้เถียงกับผู้ใหญ่', '1'],
        ['ไม่ยอมทำในสิ่งที่ผู้ใหญ่สั่งหรือวางกฎเกณฑ์ไว้', '2'],
        ['จงใจก่อกวนผู้อื่น', '3'],
        ['มักตำหนิผู้อื่นในสิ่งที่ตนเองทำผิด', '4'],
        ['ขี้รำคาญ', '5'],
        ['โกรธบึ้งตึงเป็นประจำ', '6'],
        ['เจ้าคิดเจ้าแค้น', '7'],
      ],selectedOne:null,selectedTwo:null,selectedThree:null,
    };
  }

  componentDidMount = () => {};

  handleNext = text => {
    this.props.navigation.navigate(text, {result: this.state.result});
  };

  handleInPutScore = (index,Type) => {

    if(Type===1){
      this.setState({
        selectedOne:index
      })
    }else if(Type===2){
      this.setState({
        selectedTwo:index
      })
    }else{
      this.setState({
        selectedThree:index
      })
    }
    
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: 'เลือกคำตอบ',
      },
      buttonIndex => {
        // this.setState({ clicked: BUTTONS[buttonIndex] });
        this.state.inArray.push(buttonIndex);
        // console.warn(this.state.inArray);
      },
    );
  };

  handleSuccessQuiz = () => {
    if (
      (this.state.result[0].Type_ID_No_Frist != null ||
        this.state.result[0].Type_ID_No_Second != null ||
        this.state.result[0].Type_ID_No_Third != null) &&
      this.state.groupArray.length <= 0
    ) {
      // console.warn('NEXT');
      this.startPopupAlert('success', 'สำเร็จ', 'คุณทำแบบทดสอบไปแล้ว');
      this.handleNext('mainPage');
    } else if (
      (this.state.result[0].Type_ID_No_Frist != null ||
        this.state.result[0].Type_ID_No_Second != null ||
        this.state.result[0].Type_ID_No_Third != null) &&
      this.state.groupArray.length >= 3
    ) {
      this.setState({IsShow: true});

      UpdateScore(
        this.state.result[0].Score_ID,
        this.state.groupArray[0],
        this.state.groupArray[1],
        this.state.groupArray[2],
        this.state.result[0].Child_ID,
      ).then(result => {
        if (result == 'อัพเดทผลคะแนนสำเร็จ') {
          lineNotify(
            this.state.result[0].User_Information,
            this.state.result[0].Child_Information,
            this.state.result[0].Child_Age,
            this.state.groupArray[0],
            this.state.groupArray[1],
            this.state.groupArray[2],
          ).then(status => {
            if (status == 200) {
              this.setState({IsShow: false});
              this.startPopupAlert('success', 'สำเร็จ', result);
            } else {
              this.setState({IsShow: false});
              this.startPopupAlert(
                'success',
                'สำเร็จ',
                'line Notify not working.',
              );
            }
            this.handleNext('mainPage');
          });
        } else {
          console.warn(result);
          this.startPopupAlert('danger', 'ไม่สำเร็จ', 'กรุณาลองอีกครั้ง');
        }
      });
    } else {
      if (this.state.groupArray.length >= 3) {
        // console.warn('NEW');
        this.setState({IsShow: true});
        // console.warn(this.state.result[0].Child_ID);
        InsertScore(
          this.state.groupArray[0],
          this.state.groupArray[1],
          this.state.groupArray[2],
          this.state.result[0].Child_ID,
        ).then(result => {
          this.setState({IsShow: false});
          if (result == 'บันทึกและประมวลผลผลคะแนนสำเร็จ') {
            lineNotify(
              this.state.result[0].User_Information,
              this.state.result[0].Child_Information,
              this.state.result[0].Child_Age,
              this.state.groupArray[0],
              this.state.groupArray[1],
              this.state.groupArray[2],
            ).then(status => {
              if (status == 200) {
                this.setState({IsShow: false});
                this.startPopupAlert('success', 'สำเร็จ', result);
              } else {
                this.setState({IsShow: false});
                this.startPopupAlert(
                  'success',
                  'สำเร็จ',
                  'line Notify not working.',
                );
              }
              this.handleNext('mainPage');
            });
          } else {
            this.startPopupAlert('danger', 'ไม่สำเร็จ', 'กรุณาลองอีกครั้ง');
          }
        });
      } else {
        this.startPopupAlert(
          'danger',
          'ไม่สำเร็จ',
          'โปรดทำแบบทดสอบให้ครบก่อน 1 ครั้ง',
        );
      }
    }
  };

  addSumGroupArray = arr => {
    this.state.groupArray.push(arr.reduce((a, b) => a + b, 0));
    // console.warn(this.state.groupArray);
  };

  startPopupAlert = (type, title, sub) => {
    this.setState({show: true, typeThame: type, title: title, subtitle: sub});
  };

  handleClose = () => {
    this.setState({show: false});
  };

  onStepPress = position => {
    this.setState({currentPage: position});
    this.viewPager.setPage(position);

    this.addSumGroupArray(this.state.inArray);
    this.setState({inArray: []});
    // console.warn(this.state.currentPage);
  };

  renderLabel = ({position, stepStatus, label, currentPosition}) => {
    return (
      <Text
        style={
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }>
        {label}
      </Text>
    );
  };

  /* /////////////////////////////ทดสอบวางไปก่อน////////////////////////////////////// */
  elementOne = (data, index) => (
    <TouchableOpacity
      style={{alignItems: 'center', justifyContent: 'center'}}
      onPress={
        /*() => Alert.alert(`This is column ${index}`)*/ this.handleInPutScore.bind(
          this,index,1
        )
      }>
      <View style={[styles.btn,{backgroundColor: index === this.state.selectedOne ? 'green' : 'red'}]}>
        {/* <Text style={styles.btnText}>{data}</Text> */}
        <Text style={styles.btnText}>{parseInt(data) + 1} ตอบ</Text>
      </View>
    </TouchableOpacity>
  );

  elementTwo = (data, index) => (
    <TouchableOpacity
      style={{alignItems: 'center', justifyContent: 'center'}}
      onPress={
        /*() => Alert.alert(`This is column ${index}`)*/ this.handleInPutScore.bind(
          this,index,2
        )
      }>
      <View style={[styles.btn,{backgroundColor: index === this.state.selectedTwo ? 'green' : 'red'}]}>
        {/* <Text style={styles.btnText}>{data}</Text> */}
        <Text style={styles.btnText}>{parseInt(data) + 1} ตอบ</Text>
      </View>
    </TouchableOpacity>
  );

  elementThree = (data, index) => (
    <TouchableOpacity
      style={{alignItems: 'center', justifyContent: 'center'}}
      onPress={
        /*() => Alert.alert(`This is column ${index}`)*/ this.handleInPutScore.bind(
          this,index,3
        )
      }>
      <View style={[styles.btn,{backgroundColor: index === this.state.selectedThree ? 'green' : 'red'}]}>
        {/* <Text style={styles.btnText}>{data}</Text> */}
        <Text style={styles.btnText}>{parseInt(data) + 1} ตอบ</Text>
      </View>
    </TouchableOpacity>
  );

    /* /////////////////////////////ทดสอบวางไปก่อน////////////////////////////////////// */

  renderViewPagerPage = data => {
    if (data == 'Page 1') {
      return (
        <View key={data} style={styles.page}>
          <View>
            <Card
              style={{
                width: width * 0.97,
                height: height * 0.60,
                shadowColor: '#000',
                shadowOpacity: 0.36,
                elevation: 8,
                padding: 5,
              }}>
              <ScrollView persistentScrollbar={false}
              directionalLockEnabled={true}
              keyboardShouldPersistTaps={'always'}
              alwaysBounceVertical={true}
              showsVerticalScrollIndicator={true}>
                <Table borderStyle={{borderColor: 'transparent'}}>
                  <Row
                    data={this.state.tableHead}
                    style={styles.head}
                    textStyle={[{color: 'white'}, styles.text]}
                  />
                  {this.state.tableData1.map((rowData, index) => (
                    <TableWrapper key={index}  style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}>
                      {rowData.map((cellData, cellIndex) => (
                        <Cell
                          key={cellIndex}
                          data={
                            cellIndex === 0
                              ? cellData
                              : this.elementOne(cellData, index)
                          }
                          textStyle={styles.textCell}
                        />
                      ))}
                    </TableWrapper>
                  ))}
                </Table>
              </ScrollView>
            </Card>
          </View>
        </View>
      );
    } else if (data == 'Page 2') {
      return (
        <View key={data} style={styles.page}>
          <View>
            <Card
              style={{
                width: width * 0.97,
                height: height * 0.60,
                shadowColor: '#000',
                shadowOpacity: 0.36,
                elevation: 8,
              }}>
              <ScrollView persistentScrollbar={true}>
                <Table borderStyle={{borderColor: 'transparent'}}>
                  <Row
                    data={this.state.tableHead}
                    style={styles.head}
                    textStyle={[{color: 'white'}, styles.text]}
                  />
                  {this.state.tableData2.map((rowData, index) => (
                    <TableWrapper key={index} style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}>
                      {rowData.map((cellData, cellIndex) => (
                        <Cell
                          key={cellIndex}
                          data={
                            cellIndex === 0
                              ? cellData
                              : this.elementTwo(cellData, index)
                          }
                          textStyle={styles.text}
                        />
                      ))}
                    </TableWrapper>
                  ))}
                </Table>
              </ScrollView>
            </Card>
          </View>
        </View>
      );
    } else if (data == 'Page 3') {
      return (
        <View key={data} style={styles.page}>
          <View>
            <Card
              style={{
                width: width * 0.97,
                height: height * 0.60,
                shadowColor: '#000',
                shadowOpacity: 0.36,
                elevation: 8,
              }}>
              <ScrollView persistentScrollbar={true}>
                <Table borderStyle={{borderColor: 'transparent'}}>
                  <Row
                    data={this.state.tableHead}
                    style={styles.head}
                    textStyle={[{color: 'white'}, styles.text]}
                  />
                  {this.state.tableData3.map((rowData, index) => (
                    <TableWrapper key={index} style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}>
                      {rowData.map((cellData, cellIndex) => (
                        <Cell
                          key={cellIndex}
                          data={
                            cellIndex === 0
                              ? cellData
                              : this.elementThree(cellData, index)
                          }
                          textStyle={styles.text}
                        />
                      ))}
                    </TableWrapper>
                  ))}
                </Table>
              </ScrollView>
            </Card>
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <ShowModalQuiz /> */}
        <ShowProgress IsShow={this.state.IsShow} />
        <SCLAlert
          show={this.state.show}
          theme={this.state.typeThame}
          title={this.state.title}
          onRequestClose={this.handleClose}
          subtitle={this.state.subtitle}>
          <SCLAlertButton
            theme={this.state.typeThame}
            onPress={this.handleClose}>
            Done
          </SCLAlertButton>
        </SCLAlert>
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={firstIndicatorStyles}
            currentPosition={this.state.currentPage}
            labels={['อาการที่ 1', 'อาการที่ 2', 'อาการที่ 3', 'สำเร็จ']}
            renderLabel={this.renderLabel}
            stepCount={4}
            onPress={this.onStepPress}
          />
          <Text
            style={{
              width: width,
              alignItems: 'center',
              textAlign: 'center',
              fontSize: height * 0.02,
              color: 'red',
              fontWeight: 'bold',
            }}>
            เลือกปุ่มด้านบนหากต้องการเลื่อน
          </Text>
        </View>

        <ViewPager
          style={{height: height * 0.7, width: width}}
          ref={viewPager => {
            this.viewPager = viewPager;
          }}
          onPageSelected={page => {
            this.setState({currentPage: page.position});
          }}>
          {PAGES.map(page => this.renderViewPagerPage(page))}
        </ViewPager>

        <Button
          onPress={
            this.handleSuccessQuiz.bind(
              this,
            ) /*this.handleSuccessQuiz.bind(this)*/
          }
          disabled={this.state.Isdisablebtn}
          style={{
            width: width,
            height: height * 0.07,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#21BBDA',
            marginTop:- height * 0.07,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: height * 0.025,
            }}>
            ประมวลผล
          </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  stepIndicator: {
    marginTop: - height*0.33,
  },
  page: {
    justifyContent: 'center',
    marginTop: -height*0.035
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f',
  },
  head: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.05,
    backgroundColor: '#808B97',
  },
  text: {
    margin: 6,
    paddingVertical: 5,
    fontSize: height * 0.025,
  },
  textCell: {
    margin: 6,
    justifyContent:'center',
    alignSelf:'space-between',
    marginTop:height*0.06,
    height:height*0.15,
    paddingVertical: 5,
    fontSize: height * 0.025,
  },
  row: {
    flexDirection: 'row',
    margin: 3,
    borderColor: 'lightgray',
    height: height * 0.15,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: width * 0.2,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  btnText: {textAlign: 'center', color: '#fff'},
});

// 'default',
// 'inverse',
// 'success',
// 'info',
// 'warning',
// 'danger'

