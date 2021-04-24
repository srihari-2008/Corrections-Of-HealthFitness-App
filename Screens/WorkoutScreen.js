import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {Header, Icon, Badge} from "react-native-elements"


export default class WorkoutScreen extends React.Component {
render(){
  return (
    <ScrollView>

    
    <View style={styles.container}>
      <Header
     leftComponent={<Icon name="home" type="fontawesome5" color="blue" onPress={()=>{
       this.props.navigation.navigate("HomeScreen")
     }}/>}

     centerComponent={{text:"WorkoutScreen",style:{color:"blue",fontSize:20,fontWeight:"bold"}}}
     backgroundColor={"green"}
     />  
     <Text>
      Keep Your Health Fit
     </Text>
     <Image
     source={require("../assets/Workout.png")}
     style={{width:30,height:30,alignSelf:"center"}}
     />
    </View>
    </ScrollView>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
