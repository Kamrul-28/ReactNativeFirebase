//React Elements
import React, { Component } from 'react';
import { Button, View, Text,ImageBackground,SafeAreaView,StyleSheet } from 'react-native';
import firebase from 'firebase';

//Separator
function Separator() {
    return <View style={styles.separator} />;
  }

//Class Component
export default class Home extends Component {


  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  } 

  render() {
    return (
        <ImageBackground source={require('../../assets/images/bg.jpg')} style={styles.image}>
                <Text style={styles.text}>Add Your Details</Text>
                <Separator />
                <View style={styles.container}>
                    <View>
                    <Button
                        color="#3740FE" 
                        title="Add Details"
                        onPress={() => this.props.navigation.navigate('Blog')}
                    />
                    <Separator />
                    <Button
                        color="#3740FE"
                        title="Show Details"
                        onPress={() => this.props.navigation.navigate('BlogDetails')}
                    />
                    <Separator />
                     <Button
                        color="#3740FE"
                        title="Logout"
                        onPress={() => this.signOut()}
                      />
                    </View>
                </View>
        </ImageBackground>
    );
  }
}

//CSS Part

const styles = StyleSheet.create({
    image:{
        flex:1
    },
    text:{
        color:'#fff',
        textAlign:'center',
        padding:'20px'
    },
    container:{
        justifyContent:'center',
        flex:1,
        padding:"25px"      
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },

});