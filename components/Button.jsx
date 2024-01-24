import React from 'react'
import { Button } from 'react-native-paper';

const BtnApp = ({mode, text, icon, handlePress}) => {
  return (
    <Button icon={icon} mode={mode} onPress={handlePress}>
    {text}
  </Button>
  )
}

export default BtnApp