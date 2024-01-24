import React, {useState} from 'react'
import { Modal, Portal, Text, PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from "react-native";
import BtnApp from './Button'
import UserList from './UserList';

const ModalApp = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const styles = StyleSheet.create({
    btn: {
      marginTop: 30,
      flex: 1,
      alignItems: "center",
    },

    modalStyle: {backgroundColor: 'white', margin: 20, padding: 10}
  });

  return (
    <>
      <PaperProvider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalStyle}>
            <Text>Example Modal.  Click outside this area to dismiss.</Text>
          </Modal>

        </Portal>
          <UserList />

        <View style={styles.btn}>
          <BtnApp mode="contained" text="Ouvrir" icon={null} handlePress={showModal}  />
        </View>
      
      </PaperProvider>

    </>
  )
}

export default ModalApp