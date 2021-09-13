import * as React from 'react';
import { TextInput, TouchableOpacity, Alert } from 'react-native';
import { Text, View } from '../components/Themed';

import { useState } from 'react';

import axios from "axios";
import {apiKey} from '../secret';
import { signIn } from './actions/loginAction';
import { useDispatch, useSelector } from 'react-redux';

export default function loginScreen( {navigation}: {navigation: any} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const login = useSelector((state: any) => state.login);
    
    function loginButton(){      
      var submission = new FormData()
      submission.append("username", username)
      submission.append("password", password)

      //console.log(submission)
  
      axios({
        url: `https://api.jotform.com/user/login?apiKey=${apiKey.jotform}`, 
        method: 'post',
        data: submission,
      })
      .then(function (response) {
          // your action after success
          //console.log(dispatch(signIn("response.data.message:::"+response.data.message)));
          if (response.data.message == "success"){
            navigation.navigate("TabOneScreen")
          }
          else{
            (alert("That email and password combination is incorrect."))
          }
          //console.log(response);
      })
      .catch(function (error) {
         // your action on error success
          console.log(error);
      });     
      
      //{(login.user.payload) == "success" ?(navigation.navigate(TabOneScreen))):(alert("check your username or password"))}

    }

    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />      
        <TouchableOpacity onPress={loginButton}>
          <Text>LOGIN</Text>          
        </TouchableOpacity>          
      </View>
    );
  }
  