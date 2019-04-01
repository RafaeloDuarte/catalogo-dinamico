import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Itens from './src/components/itens';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Itens/>
      </View>
    );
  }
}

AppRegistry.registerComponent('catalogo-dinamico', ()=>{App});