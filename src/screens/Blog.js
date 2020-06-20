//React Elements
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { db } from '../config';

//Pushing data to database here
let addItem = (item) => {
  db.ref('/details').push(item);
  console.log("Data Added");
};

//Class Component
export default class Blog extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      blood_group: '',
      address:'',
      contact:'',
      isLoading: false
    }
  }

  //Updateing Input Values
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  //Handleing Submit
  handleSubmit = () => {
    addItem(this.state);
  };


  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            value={this.state.displayName}
            onChangeText={(val) => this.updateInputVal(val, 'displayName')}
          />      
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Blood Group"
            value={this.state.blood_group}
            onChangeText={(val) => this.updateInputVal(val, 'blood_group')}
          />   
          <TextInput
            style={styles.inputStyle}
            placeholder="Address"
            value={this.state.address}
            onChangeText={(val) => this.updateInputVal(val, 'address')}
          /> 

          <TextInput
            style={styles.inputStyle}
            placeholder="Contact"
            value={this.state.contact}
            onChangeText={(val) => this.updateInputVal(val, 'contact')}
          /> 
          <Button
            color="#3740FE"
            title="Add Details"
            onPress={() => this.handleSubmit()}
          />

          <Text 
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('BlogDetails')}>
            Click Here to see Details of others
          </Text>                          
      </View>
    );
  }
}

//Css Part
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});