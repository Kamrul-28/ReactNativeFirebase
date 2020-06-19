import React, { Component } from 'react';
import { Button, View, Text,ImageBackground,SafeAreaView,StyleSheet } from 'react-native';

function Separator() {
    return <View style={styles.separator} />;
  }
  
export default class Home extends Component {
  render() {
    return (
    
            <ImageBackground source={require('../../assets/images/bg.jpg')} style={styles.image}>
                 <Text style={styles.text}>Add Your Details</Text>
                 <Separator />
                 <SafeAreaView style={styles.container}>
                     <View>
                        <Button
                            title="Add"
                            onPress={() => this.props.navigation.navigate('AddItem')}
                        />
                        <Separator />
                        <Button
                            color="#841584"
                            title="Show Details"
                            onPress={() => this.props.navigation.navigate('List')}
                        />
                        
                     </View>
                 </SafeAreaView>
            </ImageBackground>
     
    );
  }
}

//CSS Part

const styles = StyleSheet.create({
    image:{
        flex: 1
    },
    text:{
        color:'#fff',
        fontSize:'20px',
        textAlign:'center',
        padding:'20px'
    },
    container:{
        justifyContent:'center',
        flex:1
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }
});