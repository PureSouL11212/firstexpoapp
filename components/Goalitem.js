import { StyleSheet,View ,Text,Pressable} from "react-native";

function GoalItem(props) {

 return (
 <View style={styles.goalsitem}>
 <Pressable android_ripple={{color:'green'}} 
 onPress={
 props.onDeleteItem.bind(this,props.id) }
 style={({pressed}) => pressed && styles.pressedItem}> 
 <Text style={styles.goalText}>{props.text}</Text>
 </Pressable>
 </View>
 );
}

export default GoalItem; 
const styles=StyleSheet.create({
 goalsitem: {
 margin: 6,
 borderRadius: 6,
 backgroundColor: 'purple',
 //color:'white',
 },
 pressedItem:{
 opacity:0.5,
 },

 goalText: {
 color: 'white',
 padding: 8,
 },
});
