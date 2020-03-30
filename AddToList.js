import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredCourse, setEnteredCourse] = useState('');
  const [listCourse, setListCourse] = useState([]);
  const courseInputHandler = (enteredText) => {
    setEnteredCourse(enteredText)
  }
  const addCourseHandeler = () => {
    setListCourse(currentCourse => [...currentCourse, { key: Math.random().toString(), value: enteredCourse }]);
  }

  return (
    <View style={style.container}>
      <View style={style.row}>
        <View style={style.addCourseSec}>
          <TextInput placeholder="Course Name" style={style.addCourseInput} onChangeText={courseInputHandler} value={enteredCourse} />
          <Button title="Add" style={style.addCourseButtom} onPress={addCourseHandeler} />
        </View>
      </View>

      <FlatList
        keyExtractor={(item, index) => item.item}
        data={listCourse}
        renderItem={
            itemData => (
            <View style={style.courseListItem} >
              <Text style={style.courseTitle}>{itemData.item.value}</Text>
            </View>)}
      />

      {/* <ScrollView>
        { listCourse.map((course ,  index) => <View style={style.courseListItem} key={index}><Text style={style.courseTitle}>{course}</Text></View>) }
      </ScrollView> */}
    </View>
  );


}


const style = StyleSheet.create({

  container: {
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    alignItems: "center",
    backgroundColor: '#98fb98',
    padding: 5
  },
  addCourseSec: {
    flexDirection: 'row'
  },
  addCourseInput: {
    flex: 1,
    textDecorationColor: '#fff',
    paddingLeft: 5,
    paddingRight: 5,
  },
  addCourseButtom: {
    backgroundColor: '#6b8e23'

  },
  courseListItem: {
    padding: 15,
    margin: 5,
    backgroundColor: '#d3d3d3',
    borderRadius: 5
  },

  courseTitle: {

    fontWeight: '600'
  }

});

