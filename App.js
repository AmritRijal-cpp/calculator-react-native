import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NumpadBtns from './components/NumpadBtns';
import { useState } from 'react';
import styles from './styles/App.scss'; 

export default function App() {

  const [resultDisplay, setResultDisplay] = useState([]);

  return (
    <View style={styles.container}>

      <View style={styles.result}>
        <View style={styles.resultDisplay}>
          <Text style={styles.text}>{resultDisplay}</Text>
        </View>
      </View>

      <View style={styles.numpad}>
        <NumpadBtns resultDisplay={resultDisplay} setResultDisplay={setResultDisplay} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000000",
//     padding: 25,
//   },
//   result: {
//     flex: 2,
//     width: "100%",
//   },
//   numpad: {
//     flex: 4,
//     width: "100%",
//   },
//   resultDisplay: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "flex-end",
//     // paddingRight: "6%",
//     marginBottom: 20,
//   }, 
//   text: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#ffffff",
//     textAlign: "right",
//   }
// });
