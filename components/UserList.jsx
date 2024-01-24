import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { List } from 'react-native-paper';

const UserList = () => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  const users = [
        { prenom: 'Devin'},
        { prenom: 'Dan'},
        { prenom: 'Dominic'},
        { prenom: 'Jackson'},
        { prenom: 'James'},
        { prenom: 'Joel'},
        { prenom: 'John'},
        { prenom: 'Jillian'},
        { prenom: 'Jimmy'},
        { prenom: 'Julie'},
    ];

  return (
    <List.Section title="">

      <List.Accordion
        title="Liste des utilsiateurs"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        {
          users.map((user, index) => {
            return (
              <View>
                <List.Item key={index} title={user.prenom} />
              </View>
            )
          })
        }
      </List.Accordion>
    </List.Section>
  
  )
}

export default UserList