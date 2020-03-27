import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      

      <View style={style.row}>
        <View style={style.box1}>
          <Text>Box - 1</Text>

        </View>
        <View style={style.box2}>
          <Text>Box - 2</Text>
        </View>
        <View style={style.box3}>
          <Text>Box - 3</Text>
        </View>

      </View>



    </View>
  );
}


const style = StyleSheet.create({

  container: {
    backgroundColor: '#000',
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: "stretch"

  },
  box1: {
    backgroundColor: '#009933',
flex: 1,
margin : 5
    
  },
  box2: {

    backgroundColor: '#ff3300',
    flex: 1,
    margin : 5
   
 
  },
  box3: {

    backgroundColor: '#0066cc',
    flex: 1,
    margin : 5 
 
  }


});

