import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createSwitchNavigator,createAppContainer} from  'react-navigation' 
import FoodScreen from "./Screens/FoodScreen"
import HomeScreen from "./Screens/HomeScreen"
import WorkoutScreen from "./Screens/WorkoutScreen"
import Monday from "./Screens/Monday"
import Tuesday from "./Screens/Tuesday"
import Wednesday from "./Screens/Wednesday"
import Thursday from "./Screens/Thursday"
import Friday from "./Screens/Friday"
import Saturday from "./Screens/Saturday"
import Sunday from "./Screens/Sunday"

export default class App extends React.Component {
render(){
  return (
    
      <AppContainer/>
    
  );
 }
}

var SwitchNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  FoodScreen:FoodScreen,
  WorkoutScreen:WorkoutScreen,
  Monday:Monday,
  Tuesday:Tuesday,
  Wednesday:Wednesday,
  Thursday:Thursday,
  Friday:Friday,
  Saturday:Saturday,
  Sunday:Sunday
})

const AppContainer=createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
