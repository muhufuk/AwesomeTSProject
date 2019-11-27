import React from 'react';
import { View, Text, Button } from 'react-native';
import { Props } from './App';

export class DetailsScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    const { navigation } = this.props;
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>
        itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
      </Text>
      <Text>
        otherParam:
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
      </Text>
      <Button title="Go to Details... again" onPress={() => navigation.push('Details', {
        itemId: Math.floor(Math.random() * 100),
      })} />
    </View>);
  }
}