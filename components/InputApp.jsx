import React, {useState} from 'react'
import { TextInput } from 'react-native-paper';
import BtnApp from './Button';

const InputApp = () => {
  const [lastname, setLastame] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <TextInput
      mode='outlined'
      label="Nom"
      value={lastname}
      onChangeText={text => setLastame(text)}
    />

      <TextInput
      mode='outlined'
      label="Prenom"
      value={firstname}
      onChangeText={text => setFirstname(text)}
    />

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

      <TextInput
      mode='outlined'
      label="Confirmation password"
      value={confirmPassword}
      onChangeText={text => setConfirmPassword(text)}
    />

    <BtnApp mode="contained" text='Envoyer' />
    </>
  )
}

export default InputApp