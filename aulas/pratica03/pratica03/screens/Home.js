import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const Home = () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Home</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
      <Button title="Adicionar" onPress={() => alert('Botão Adicionar Pressionado')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  appBar: {
    backgroundColor: 'blue',
    padding: 16,
    alignItems: 'center',
  },
  appBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});

export default Home;
