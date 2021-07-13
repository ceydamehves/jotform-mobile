import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Alert, Dimensions, TouchableOpacity} from 'react-native';
import axios from 'axios';
import { Text, View } from '../components/Themed';

import {apiKey} from '../secret';

import { Video } from 'expo-av';
const { width, height } = Dimensions.get("window");

export default function FormScreen( ) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<{[index: string]:any}>({});
  console.log(data)
  
  useEffect(() => {
    axios('https://api.jotform.com/form/211803091239046/questions?apiKey=' + apiKey.jotform)
      .then(response => setData(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [1]);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? <Text>Loading...</Text> : 
      (
        <View style={{ flex:1 }}>
          
          <Video
            source={{ uri: data['content']["1"]["description"].toString() }} 
            shouldPlay
            isLooping
            resizeMode="cover"
            style={styles.backgroundVideo}
          />
          <Text style={styles.title}>{data['content']["1"]["text"]}.</Text>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('pressed')}>
              <Text style={styles.choice}>A</Text>
            <Text style={styles.buttonText}>{data['content']["1"]["options"].split('|')[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('pressed')}>
            <Text style={styles.choice}>B</Text>
            <Text style={styles.buttonText}>{data['content']["1"]["options"].split('|')[1]}</Text>
          </TouchableOpacity>
          
        </View>
      )} 
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
  },
  title:{
    flex:1,
    alignSelf:'center',
    marginTop:50,
    color:'#fff',
    fontSize: 28,
    fontWeight: 'bold'
  },
  button:{
    flexDirection:'row',
    alignSelf:'center',
    backgroundColor: 'rgba(46, 136, 91, 0.5)',
    padding:10,
    borderRadius:20,
    borderColor:'rgba(46, 136, 91, 0.7)',
    borderWidth:2,
    marginTop:5,
    marginBottom:5,
    width: width*0.9
  },
  buttonText:{
    color:'#fff',
    fontSize: 16,
  },
  choice:{
    textAlign:'center',
    color:'#fff',
    marginRight:10,
    backgroundColor: 'rgb(46, 136, 91)',
    borderRadius:15,
    width:25,
    height:25,
    fontSize:16
  }
});