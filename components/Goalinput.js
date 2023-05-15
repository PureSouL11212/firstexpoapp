import { useState } from 'react';
import { View, TextInput, Button, Image,Modal,StyleSheet, ImageBackground } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function GoalInput(props) {
 const [enteredGoalText, setEnteredGoalText] = useState('');
 function goalInputHandler(enteredText) {
 setEnteredGoalText(enteredText);
 }
 
 function addGoalHandler() {
 props.onAddGoal(enteredGoalText);
 setEnteredGoalText('');
 }
 
 return (
 <Modal visible={props.visible} animationType="slide">
 <View style={styles.inputContainer}>
 <Image style={styles.images1} source={require('../assets/images/welcome.jpg')}/>
 <Image style={styles.images} source={require('../assets/images/smit.png')}/>

 <Image style={styles.image} source={require('../assets/images/pngwing.com.png')}/>
 <TextInput
 style={styles.TextInput}
 placeholder="enter your registration number "
 onChangeText={goalInputHandler} 
 value={enteredGoalText}/>
 <View style={styles.buttonContainer}>
 
 <View style={styles.button}>
 <Button title="proceed" 
 onPress={addGoalHandler} />
 </View> 
 <View style={styles.button}>
 <Button title="cancel" onPress={props.oncancel}/>
 </View> 
 </View>

 </View>
 </Modal>
 );
};

 export default GoalInput;

const styles=StyleSheet.create({
 inputContainer: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 padding:16,
 backgroundColor:'#f0f8ff',
 // flexDirection: 'column',
 //marginBottom: 24,
 // borderTopColor:'green',
 // borderBottomColor: '#cccccc',
 // borderBottomWidth: 1,
 },
 image :{
width:100,
height:100,
margin: 20,

 },
 TextInput: {
 borderWidth: 1,
 borderColor: '#cccccc',
 width: '100%',
 // marginRight: 8,
 padding: 8,
 borderColor:'#000000',
 borderRadius:20,
 
 // :black,
 
 },
 buttonContainer:{
 marginTop:16,
 flexDirection:'row' 

 },
 images :{
 height:150,
 borderRadius:50,
 marginBottom:15,
 margin:-100,

},
images1:{
// height: -100,
marginTop:10,
marginBottom:125,
borderRadius:20,

},
button: {
width:100,
marginHorizontal:8,
borderRadius:200,
},
});
