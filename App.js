import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };



  render() {
    const { search } = this.state;
    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }, {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }, {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }, {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }
    ];

   const keyExtractor = (item, index) => index.toString()

   const renderItem = ({ item }) => (
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{ source: { uri: item.avatar_url } }}
        bottomDivider
        
      />
    )



    return (

      <View style={StyleSheet.Container}>
        <View style={style.Header}>
          <Button title="Edit" style={style.HeaderLeftBtn} />
          <Text style={style.ContentHeading}>Chats</Text>
          <View style={style.HeaderRightIconView}>
            <Icon name='create' size={18} color={"#007aff"} />
          </View>
        </View>

        <Text style={style.Heading}>Chats</Text>

        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          lightTheme={true}
        />

        <FlatList
          keyExtractor={keyExtractor}
          data={list}
          renderItem={renderItem}
        />


      </View>

    );

  }

}


const style = StyleSheet.create({

  Container: {
    flex: 1
  },

  Header: {
    height: 55,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  HeaderLeftBtn: {
    width: "10%"

  },
  HeaderRightIconView: {
    width: "10%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 10,



  },
  ContentHeading: {
    color: "#000000",
    width: "80%",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 22
  },
  Heading: {
    fontSize: 40,
    fontWeight: "700",
    padding: 10
  }




});

