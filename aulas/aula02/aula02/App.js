import { View, StyleSheet } from 'react-native'
import Box from './components/Box';

// componente principal do app
const App = () => (
  <View style={styles.container}>
<Box size={50} color="blue" flex={1}></Box>
<Box size={50} color="red" flex={2}></Box>
<Box size={50} color="green" flex={3}></Box>
  </View>
);

// estilo objeto StyleSheet
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: "stretch"
  },
});

export default App;








