import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemComponent from '../components/ItemComponent';
import { db } from '../config';

let detailsRef = db.ref('/details');

export default class List extends Component {
  state = {
    details: []
  };

  componentDidMount() {
    detailsRef.on('value', snapshot => {
      let data = snapshot.val();
      let details = Object.values(data);
      this.setState({ details });
    });
  }

  render() {
    return (
      <View>
        {this.state.details.length > 0 ? (
          <ItemComponent details={this.state.details} />
        ) : (
          <Text>No details</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb'
  }
});