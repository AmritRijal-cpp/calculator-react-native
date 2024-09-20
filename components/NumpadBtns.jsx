import { Pressable, StyleSheet, View, Text } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Calculator from './Calculator';

const NumpadBtns = ({resultDisplay, setResultDisplay}) => {

   const tap = (action, value) => {
      Calculator(action, value, resultDisplay, setResultDisplay)

   }

   return (
      <View style={styles.container}>

         <View style={[styles.row]}>
            <Pressable style={[styles.circle, styles.circleAC]} onPress={() => tap("clear", resultDisplay)}>
               <Text style={styles.text}>AC</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("backspace")}>
               <Text style={styles.text}><MaterialIcons name="backspace" size={30} color="white" /></Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("operator", "/")}>
               <Text style={styles.text}>/</Text>
            </Pressable>
         </View>

         <View style={[styles.row]}>
            <Pressable style={[styles.circle]} onPress={() => tap("number", 7)}>
               <Text style={styles.text}>7</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("number", 8)}>
               <Text style={styles.text}>8</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("number", 9)}>
               <Text style={styles.text}>9</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("operator", "*")}>
               <Text style={styles.text}><Entypo name="cross" size={30} color="white" /></Text>
            </Pressable>
         </View>

         <View style={[styles.row]}>
            <Pressable style={[styles.circle]} onPress={() => tap("number", 4)}>
               <Text style={styles.text}>4</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("number", 5)}>
               <Text style={styles.text}>5</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("number", 6)}>
               <Text style={styles.text}>6</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("operator", "-")}>
               <Text style={styles.text}>-</Text>
            </Pressable>
         </View>

         <View style={[styles.row]}>
            <Pressable style={[styles.circle]} onPress={() => tap("number", 1)}>
               <Text style={styles.text}>1</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("number", 2)}>
               <Text style={styles.text}>2</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("number", 3)}>
               <Text style={styles.text}>3</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("operator", "+")}>
               <Text style={styles.text}>+</Text>
            </Pressable>
         </View>

         <View style={[styles.row]}>
            <Pressable style={[styles.circle]} onPress={() => tap("number", "00")}>
               <Text style={styles.text}>00</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("number", 0)}>
               <Text style={styles.text}>0</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("number", ".")}>
               <Text style={styles.text}>.</Text>
            </Pressable>
            <Pressable style={[styles.circle]} onPress={() => tap("equal")}>
               <Text style={styles.text}>=</Text>
            </Pressable>
         </View>

      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   row: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   circle: {
      height: 70,
      width: 70,
      borderRadius: 35,
      backgroundColor: '#7a7a7a',
      justifyContent: 'center',
      alignItems: 'center',
   },

   circleAC: {
      width: 160,
   },
   text: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#ffffff',
   }
})

export default NumpadBtns;