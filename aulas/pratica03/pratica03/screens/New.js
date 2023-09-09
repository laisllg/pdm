import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';

const New = () => {
  const handleSave = () => {
    // Lógica para salvar os dados
    console.log('Nome:', name);
    console.log('Status:', status);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>New</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Status:</Text>
        <Switch
          value={status}
          onValueChange={(value) => setStatus(value)}
        />
      </View>
      <Button title="Salvar" onPress={handleSave} />
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  input: {
    flex: 1,
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default New;
