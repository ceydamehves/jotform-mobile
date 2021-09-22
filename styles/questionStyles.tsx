import { StyleSheet,Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({

//SignInScreen
      logo: {
       alignSelf: 'center',
       marginTop: 50,
       width: 115,
       height: 109
      },
      loginInput:{
        alignSelf: 'center',
        borderColor: '#E3E5F5',
        borderWidth: 1,
        borderRadius: 3,
        width: width * 0.8,
        height: 40,
        marginTop: 5
      },
      inputTitle:{
        marginLeft: 40,
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'normal'
      },
      loginButton:{
        marginTop: 40,
        alignSelf: 'center',
        backgroundColor: '#0099FF',
        borderRadius: 3,
        width: width * 0.8,
        height: 40,
      },
      buttonTitle:{
        marginTop: 10,
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
      },

//HomeScreen
      description:{
        marginTop: 20,
        marginLeft: 20,
        fontSize: 15
      },
      flatListItem:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 30,
        backgroundColor: '#0099FF',
        borderRadius: 5,
        width: width * 0.8,
        height: 120
      },
      flatListText:{
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center'
      },

//Questions
      questionContainer:{
        flex: 1, 
        flexDirection: 'column'
      },
      answerContainer:{
        flex: 2, 
        marginTop: 300
      },
      step:{
        alignSelf:'center', 
        marginTop: 5, 
        marginBottom: 5, 
        color: '#0099FF'
      },
      backgroundVideo: {
        height: height * 0.7,
      },
      controlRadio:{
        backgroundColor: '#fff',
        width: width * 0.9,
        alignSelf: 'center'
      },
      questionTitle:{
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'normal'
      },
      nextButton:{
        marginLeft: 320,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#0099FF',
        width: width * 0.1,
        borderRadius: 40,
        alignItems:'center',
        padding: 10
      },
      buttonImage:{
        width: 25,
        height: 20,
        padding: 5
      },
      shortInput:{
        alignSelf: 'center',
        marginBottom: 150,
        width: width * 0.9,
        height: 90,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(227, 229, 245, 1)'
      },
      longInput:{
          alignSelf: 'center',
          marginBottom: 150,
          width: width * 0.9,
          height: 90,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: 'rgba(227, 229, 245, 1)'
      }
});