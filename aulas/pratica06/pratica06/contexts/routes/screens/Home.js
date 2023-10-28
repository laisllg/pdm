import React from 'react';
import { View, FlatList, Text, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>@Contatinhos</Text>
      <FlatList
        data={[]}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 8 }}></View>
        )}
      />
      <Button
        title="Adicionar Contato"
        onPress={() => navigation.navigate('Novo')}
      />
    </View>
  );
}

export default Home;
