import React from 'react'
import { Button } from 'react-native-paper';

const BtnApp = ({mode, text, icon, handlePress}) => {
  return (
    <Button style={{margin: 15}} icon={icon} mode={mode} onPress={handlePress}>
    {text}
    </Button>
  )
}

export default BtnApp