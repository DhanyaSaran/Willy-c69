import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TransactionScreen from './screens/BookTransactionScreen'
import SearchScreen from './screens/SearchScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});


const TabNavigaor=createBottomTabNavigator(
  {
    Transaction:{screen:TransactionScreen},
  Search:SearchScreen
  }
)

const AppContainer=createAppContainer(TabNavigaor)