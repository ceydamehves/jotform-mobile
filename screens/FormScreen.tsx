import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Alert } from 'react-native';
import axios from 'axios';
import { Text, View } from '../components/Themed';

import {apiKey} from '../secret';

import { Video } from 'expo-av';

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
        <View>
          <Text>{data['content']["1"]["text"]}</Text>
          <Button
              title={data['content']["1"]["options"]}
              color="#f194ff"
              onPress={() => Alert.alert('pressed')}
            />
          <Button
              title={data['content']["1"]["options"]}
              color="#f194ff"
              onPress={() => Alert.alert('pressed')}
          />
          <Video
            source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
            shouldPlay
            isLooping
            resizeMode="cover"
            style={{ width:300, height: 300 }}
          />
        </View>
      )} 
    </View>
  );
};
