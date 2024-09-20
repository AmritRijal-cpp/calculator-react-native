import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NumpadBtns from './components/NumpadBtns';
import { useState } from 'react';

export default function App() {

  const [resultDisplay, setResultDisplay] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.result}>

      </View>
      <View style={styles.numpad}>
        <NumpadBtns resultDisplay={setResultDisplay} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    flex: 2,
    width: '100%',
  },
  numpad: {
    flex: 3,
    width: '100%',
  }
});
