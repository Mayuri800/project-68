import React from 'react';
import { Text, View,Image } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class Searchscreen extends React.Component {
    render() {
      return (
      <View>
        <View>  <AppHeader/> </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          <Text style={{textAlign: 'center', fontSize: 40,fontWeight:'bold',color :'purple'}}> InstaGram </Text>
           <Image
                style={{ width: 55, height: 55 }}
                source={require('../assets/Instagram.png')}

              />
        </View></View>
      );
    }
  }
