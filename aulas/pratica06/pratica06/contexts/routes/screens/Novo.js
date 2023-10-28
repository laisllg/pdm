import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function Novo({ navigation }) {
  const [nome, setNome] = useState('');

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <Button
        title="Salvar"
        onPress={() => {}}
      />
    </View>
  );
}

export default Novo;

