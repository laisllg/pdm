import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const Home = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header theme={{colors: { primary: 'green'}}}>
        <Appbar.Content color="yellow" title="Meu App"/>
        <Appbar.Action onPress={() => props.onLogout()} icon={
() => <Ionicons name="exit-outline" size={24} color="white" /
>} />
      </Appbar.Header>
    </View>
  );
};

export default Home;
