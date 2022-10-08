import React, { Component, useState } from 'react';
import { Text, View, Button, Image, TextInput, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create({
  img: {
    paddingTop: 50,
    width: 320,
    height: 480
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  regText: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  button: {
    paddingTop: 50,
  },
  textInput: {
    color: 'grey',
    textAlign: 'center',
    width: 200,
  },
});

function ArtInstitiuteOfChicago() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.img} source={require('./assets/art.png')}/>
    </View>
  );
}

function MagnificentMile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.img} source={require('./assets/mile.png')}/>
    </View>
  );
}

function NavyPier() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.img} source={require('./assets/pier.png')}/>
    </View>
  );
}

function WaterTower() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.img} source={require('./assets/water.png')}/>
    </View>
  );
}

function WillisTower() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.img} source={require('./assets/willis.png')}/>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen name="Art Institiute Of Chicago" component={ArtInstitiuteOfChicago} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile}/>
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower}/>
        <Drawer.Screen name="Willis Tower" component={WillisTower}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
