import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Icon, Badge} from "react-native-elements"

export default class Monday extends React.Component {
  render(){
    return (
     <View style={styles.container}>
      <Header
      leftComponent={<Icon name="arrow-left" type="feather" color="black" onPress={()=>{
        this.props.navigation.navigate("FoodScreen")
      }}/>}

     centerComponent={{text:"Monday",style:{color:"blue",fontSize:20,fontWeight:"bold"}}}
     backgroundColor={"green"}

     rightComponent={<Icon name="home" type="fontawesome5" color="black" onPress={()=>{
      this.props.navigation.navigate("HomeScreen")
    }}/>}
    />  
    <Text>
      Breakfast(9:00):WholeGrain Bread and Oats
    </Text>
 
    <Text>
      Lunch(12:45):Dal Rice, Rasam, Curd
    </Text>

    <Text>
      Snack(4:30):Fruits And Dry Fruits
    </Text>
     
    <Text>
      Dinner(7:30):Roti, Rajma Curry
    </Text>

   </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
