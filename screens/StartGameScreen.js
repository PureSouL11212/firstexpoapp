import { useState } from 'react';
import { TextInput, View, StyleSheet ,Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen({onpicknumber}) {
 const [enteredNumber, setEnteredNumber]=useState('');

 
 function numberInputHandler(enteredText) {
 setEnteredNumber(enteredText);
 }
function resetInputHandler(){
 setEnteredNumber('');
}
 function confirmInputHandler() {
 const chosenNumber =parseInt(enteredNumber);

 if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >99)
 {
 Alert.alert('invalid number!',
 'number has to be number beween 1 to 99.',
 [{text:'okay',style:'destructive', onPress: resetInputHandler}]
 );
 // show alert
 return;
 }
 onpicknumber(chosenNumber);

 }
 return (
 <View style={styles.inputcontainer} >
 <TextInput style={styles.numberInput} 
 maxLength={2}
 keyboardType="number-pad"
 autoCapitalize="none" //aplicable for alphabets 
 autoCorrect={false}
 onChangeText={numberInputHandler}
 value={enteredNumber}
 />
 <View style={styles.buttonscontainer}>
 <View style={styles.buttoncontainer}>
 <PrimaryButton onPress={resetInputHandler} >reset</PrimaryButton> 

 </View>
 <View style={styles.buttoncontainer}>

 <PrimaryButton onPress={confirmInputHandler}>confirm</PrimaryButton>
 </View >
 </View>
 </View>
 );
}

export default StartGameScreen;

const styles = StyleSheet.create({
 inputcontainer: { // small container
 // flex:1,
 justifyContent:'center',
 alignItems:'center',
 marginTop: 100,
 marginHorizontal: 24,
 padding: 16,
 backgroundColor: '#3b021f',
 borderRadius: 8,
 elevation: 4, //shadow for android
 shadowColor: 'black', //shadow for ios 1
 shadowOffset: { width: 0, height: 2 }, //shadow for ios 2 
 shadowRadius: 6, //shadow for ios 3
 shadowOpacity: 0.25, //shadow for ios 4
 // backgroundColor:'black',
 },
 numberInput: {
 height: 50,
 width:40,
 fontSize: 32,
 borderBottomColor: '#ddb52f',
 borderBottomWidth: 2,
 color: '#ddb52f',
 marginVertical: 8,
 fontWeight: 'bold',
 textAlign: 'center',
 },
 buttonscontainer:{
 flexDirection:'row',

 },
 buttoncontainer:{
 flex:1,
 },
});
