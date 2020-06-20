import React, { Component } from 'react';
import {View, Text, StyleSheet ,Button} from 'react-native';
import { Container, Content, Card, CardItem, Body} from 'native-base';
import PropTypes from 'prop-types';

export default class ItemComponent extends Component {
  static propTypes = {
    details: PropTypes.array.isRequired
  };

  render() {

    const CardView =this.props.details.map((detail, index)=>{return(<Text>Hellow</Text>)})

    return (
      <View>
          {this.props.details.map((detail, index) => {
            return (
              <View key={index}>
                    <Content padder>
                      <Card>
                        <CardItem header bordered>
                          <Text>{detail.displayName}</Text>
                        </CardItem>
                        <CardItem bordered>
                          <Body>
                               <Text>Address : {detail.email}</Text>
                               <Text>Address : {detail.address}</Text>
                               <Text>contact No : {detail.contact}</Text>
                               <Text>Blood Group : {detail.blood_group}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    </Content>
              </View>
            );
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    itemsList: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    itemtext: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });