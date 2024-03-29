import {useState} from 'react';
import { StyleSheet,ImageBackground} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
//import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
const [usernumber,setusernumber]=useState();

function pickednumberhandler(pickednumber){
 setusernumber(pickednumber);
}

let screen = <StartGameScreen onpicknumber={pickednumberhandler}/>;

if (usernumber) {
 screen =<GameScreen/>
}
 return (
<LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
 <ImageBackground source={require('./assets/images/background.png')} 
 resizeMode="cover"
 style={styles.rootScreen} imageStyle={styles.backgroundimage} >



 {screen}
 </ImageBackground>
 
</LinearGradient>
 );
 }
const styles = StyleSheet.create({
rootScreen:{
 flex:1,
 //backgroundColor:'#ddb52f',
},
backgroundimage:{
 opacity:0.15,
}
});
