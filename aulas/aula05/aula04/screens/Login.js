import { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Titulo from '../components/Titulo';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [erro, setErro] = useState();

  const handleEntrar = () => {
    if(email === "lais-lins@email.com" && senha === "123456"){
      setErro(null)
      props.onLogin();
      return;
    }
    setErro('Deu ruim!');
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
    <Titulo>Login</Titulo>
    {erro && <Text style={{fontSize: 12, color: 'red'}}>
{erro}</Text>}
    <TextInput 
    label={'E-mail'} 
    value={email} 
    onChangeText={(text) => setEmail (text)}
    />
    <TextInput 
    label={'Senha'} 
    value={senha} 
    onChangeText={(text) => setSenha (text)}
    secureTextEntry={true}
    />
    <Button onPress={handleEntrar}>Entrar</Button>
    </View>
  );
};

export default Login;