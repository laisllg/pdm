import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import Titulo from '../components/Titulo';

const Splash = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Ionicons name="happy-outline" size={48} />
      <Titulo>Meu App</Titulo>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Splash;
