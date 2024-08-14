import React from 'react';
import { Image,StyleSheet, View, Text, Dimensions,SafeAreaView, ImageBackground,TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  state = {
    showRealApp: false,
  };

 
  render() {
    return(
    <SafeAreaView>
      <Image source={require('G:\Mini_Project\circle.png')}></Image>


      <Text>yellow</Text>
       
    </SafeAreaView>
   
  )
  }
}
 

const styles = StyleSheet.create({
  
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bfff',
  },
  
  text: {
    color: 'grey',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    marginHorizontal: 60,
    marginTop: 30
  },
  image: {
    width: Dimensions.get('window').width*0.8,
    height: Dimensions.get('window').height*0.6,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    marginHorizontal: 60
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginTop: 20
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center'
  },
});

