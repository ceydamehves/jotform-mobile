import { StyleSheet,Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({

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
      },
      shortInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },
      longInput: {
        height: 60,
        margin: 12,
        borderWidth: 1,
      }
});