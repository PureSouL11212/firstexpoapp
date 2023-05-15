import {View ,Text,Pressable, StyleSheet} from 'react-native';
function PrimaryButton({children ,onPress}) {
 function pressHandler(){
 //console.log('pressed!');
 onPress();
 }
 return (
 <View style={styles.ButtonOutercontainer} >
 <Pressable 
 style={({pressed}) => 
 pressed ? [styles.ButtonInnercontainer,styles.pressed]
 : styles.ButtonInnercontainer } 
 onPress={onPress}
 android_ripple={{color:'#640233'}}>

 <Text style={styles.buttonText}>
 {children}
 </Text>
 </Pressable>
 </View>
 );
}

export default PrimaryButton;
const styles=StyleSheet.create({
 ButtonOutercontainer: {

 borderRadius:28,
 margin:4,
 overflow:'hidden',
 },
 ButtonInnercontainer:{
 backgroundColor:'#72063c',
 padding:28,
 paddingHorizontal:16,
 paddingVertical:8,
 elevation:2,

 },
 buttonText: {
 color:'white',
 textAlign:'center',
 },
 pressed:{
 opacity:0.75,
 }
});
