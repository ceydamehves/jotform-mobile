import * as React from 'react';
import { Text, View } from '../components/Themed';
import { TouchableOpacity, Image } from 'react-native';
import * as Linking from 'expo-linking';

import { styles } from '../styles/questionStyles';

export default function SettingsScreen( {navigation}: {navigation: any} ) {
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'column', alignSelf:'center'}}>
        <Image
          style={styles.logo}
          source={require ('../assets/images/Logo.png')}/>
          <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.jotform.com/')}
        style={{marginTop: 150, alignContent: 'center', width: 300, height: 50, backgroundColor:'#0099FF', borderRadius: 20}}> 
          <Text style ={{alignSelf:'center', color: '#fff', fontSize: 20}}>Account Settings</Text> 
          <Image
          style={{alignSelf:'center', width: 20, height: 20}}
          source={require ('../assets/images/next.png')}/>
        </TouchableOpacity> 
        </View>     
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{marginTop: 50, alignSelf: 'center', color: '#0099FF', fontSize: 24}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

