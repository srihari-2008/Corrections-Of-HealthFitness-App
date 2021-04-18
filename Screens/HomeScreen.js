import * as React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {Header, Icon, Badge} from "react-native-elements"


export default class HomeScreen extends React.Component {
render(){
  return (
    <View style={styles.container}>
      <View style={{alignItems:"center",justifyContent:"center",marginTop:20}}>

    
      <Header
     centerComponent={{text:"HealthFitnessApp",style:{color:"red",fontSize:20,fontWeight:"bold",}}}
    />  
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>{
      this.props.navigation.navigate("FoodScreen")
      
      }}>      
      <Text style={styles.buttonText}>
          FoodScreen
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>{
      this.props.navigation.navigate("WorkoutScreen")
      
      }}>      
      <Text style={styles.buttonText}>
          WorkoutScreen
      </Text>
      </TouchableOpacity>

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
  button:{
    height:30,
    width:110,
    marginTop:20,
    padding:5,
    borderRadius:10
  },
  buttonText:{
   textAlign:"center",
   fontWeight:'bold',
   color:"black"
  },
});
