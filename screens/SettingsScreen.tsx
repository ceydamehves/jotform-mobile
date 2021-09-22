import * as React from 'react';
import { Text, View } from '../components/Themed';
import { TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../styles/questionStyles';

export default function SettingsScreen( {navigation}: {navigation: any} ) {
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'column', alignSelf:'center'}}>
        <Image
          style={styles.logo}
          source={require ('../assets/images/Logo.png')}/>
        <Text style ={{marginTop: 40}}>Name :</Text> 
        <TextInput
            style={styles.loginInput}/>
        <Text style ={{marginTop: 20}}>Surname :</Text> 
        <TextInput
            style={styles.loginInput}/>
        <Text style ={{marginTop: 20}}>Username :</Text> 
        <TextInput
            style={styles.loginInput}/>
        <Text style ={{marginTop: 20}}>Password :</Text> 
        <TextInput
            style={styles.loginInput}
            secureTextEntry/>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{marginTop: 50, alignSelf: 'center', color: '#0099FF', fontSize: 24}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

