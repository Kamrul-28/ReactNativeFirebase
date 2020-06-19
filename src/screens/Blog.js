import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  AlertIOS,
  Alert,
  ImageBackground
} from 'react-native';

import { db } from '../config';

let addItem = item => {
  db.ref('/items').push({
    name: item
  });
};

export default class AddItem extends Component {
  state = {
    name: ''
  };

  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };
  handleSubmit = () => {
    addItem(this.state.name);
    alert('Item saved successfully');
  };

  render() {
    return (
      <View style={styles.main}>
            <TextInput style={styles.itemInput} onChange={this.handleChange}/>
            <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={this.handleSubmit}
            >
            <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    main: {
      flex: 1,
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'center'
      
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center'
    },
    itemInput: {
      height: 40,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 8,
      color: 'black'
    },buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
      },
      button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#3740FE',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        margin:"10px"
      }
});