import React, {useState} from 'react'
import { View } from 'react-native'
import { TextInput, Text } from 'react-native-paper';
import BtnApp from '../components/Button';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    if (email, password) {
      navigation.navigate('Dashboard', {name: 'Jane'})
    }
  }

  return (
    <View style={{padding: 15}}>
      <Text style={{textAlign: "center", margin: 20, fontSize: 16}}>Formulaire UI</Text>

      <TextInput
      mode='outlined'
      label="Email"
      value={email}
      onChangeText={text => setEmail(text)}
      
      />

      <TextInput
      mode='outlined'
      label="Password"
      value={password}
      onChangeText={text => setPassword(text)}
      />

      <BtnApp mode='contained' text='Connexion' handlePress={handlePress} />
    </View>
  )
}

export default Login