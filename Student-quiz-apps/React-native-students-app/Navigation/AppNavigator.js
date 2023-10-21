import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer } from 'react-navigation'
import loginPage from '../Views/Login/LoginPage';
import createNewPage from '../Views/CreateNew/createNewPage';
import mainPage from '../Views/MainMenu/mainPage';
import React, { Component } from 'react';
import { fromRight } from 'react-navigation-transitions';
import quizPage from '../Views/WebPage/quizPage';
import webPage from '../Views/WebPage/webPage';
import HistoryPage from '../Views/History/HistoryPage'; 

const stackConfig = {
    loginPage:{
        screen: loginPage,
        navigationOptions: {
            header: null,
          }
    },
    createNewPage:{
        screen: createNewPage,
        navigationOptions: {
            header: null,
          }
    },
    mainPage:{
        screen: mainPage,
        navigationOptions: {
            headerStyle:{
                borderBottomWidth: 3,
                backgroundColor: '#21BBDA',
                elevation: 5,
            },
            headerTransparent: true,
            headerTintColor: 'white',
            alignItems: 'center',
            // headerLeft: ,
            title: 'Learning',
            headerTitleStyle: {
                fontFamily: "Action_Man",
                fontWeight: "200"
              },
          }
    },
    quizPage:{
        screen: quizPage,
        navigationOptions: {
            headerStyle:{
                borderBottomWidth: 3,
                backgroundColor: '#21BBDA',
                elevation: 5,
            },
            headerTransparent: true,
            headerTintColor: 'white',
            alignItems: 'center',
            title: 'Quiz',
            headerTitleStyle: {
                fontFamily: "Action_Man",
                fontWeight: "200"
              }
          }
    },
    webPage:{
        screen: webPage,
        navigationOptions: {
            headerStyle:{
                borderBottomWidth: 3,
                backgroundColor: 'transparent',
                elevation: 5,
            },
            headerTransparent: true,
            headerTintColor: 'black',
            alignItems: 'center',
            title: 'WebPage',
            headerTitleStyle: {
                fontFamily: "Action_Man",
                fontWeight: "200"
              }
          }
    },
    HistoryPage:{
        screen: HistoryPage,
        navigationOptions: {
            headerStyle:{
                borderBottomWidth: 3,
                backgroundColor: '#21BBDA',
                elevation: 5,
            },
            headerTransparent: true,
            headerTintColor: 'white',
            alignItems: 'center',
            title: 'History',
            headerTitleStyle: {
                fontFamily: "Action_Man",
                fontWeight: "200"
              }
          }
    },
   
}

const AppNavigatior = createStackNavigator(stackConfig,{
    initialRouteName:'loginPage',
    transitionConfig:()=> fromRight(),
})

const AppContainer = createAppContainer(AppNavigatior)

export default AppContainer