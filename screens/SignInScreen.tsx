import * as React from 'react';
import { TextInput, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '../components/Themed';

import { useState } from 'react';

import axios from "axios";
import {apiKey} from '../secret';
import { styles } from '../styles/questionStyles';

export default function loginScreen( {navigation}: {navigation: any} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const dispatch = useDispatch();

    //const login = useSelector((state: any) => state.login);
    
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
            navigation.navigate("HomeScreen")
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
      
      //{(login.user.payload) == "success" ?(navigation.navigate(HomeScreen))):(alert("check your username or password"))}

    }

    return (
      <View style={{flex:1}}>
        <Image
          style={styles.logo}
          source={require ('../assets/images/Logo.png')}/>
        <View style={{marginTop: 60}}>
        <Text style={styles.inputTitle}>Name or e-mail</Text>
        <TextInput
          style={styles.loginInput}
          value={username}
          onChangeText={setUsername}
        />
        <View style={{flexDirection:'row'}}>
          <Text style={styles.inputTitle}>Password</Text>
          <Text style={{marginTop:20, marginLeft: 130, color:'rgba(40, 47, 66, 0.5)'}}>Forgot Password?</Text>
        </View>        
        <TextInput
          style={styles.loginInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />      
        <TouchableOpacity style={styles.loginButton}
                          onPress={loginButton}>
          <Text style={styles.buttonTitle}>Sign In</Text>          
        </TouchableOpacity> 
        <View style={{flexDirection:'row', justifyContent:'center', marginTop:25}}>          
          <Text style={{fontSize:16}}>Dont't you have an account?</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{marginLeft:15, color:'#0099FF', fontSize:16}}>Sign Up</Text>
          </TouchableOpacity>            
        </View>
      </View>        
      </View>
    );
  }
  