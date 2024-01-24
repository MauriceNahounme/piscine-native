import React, {useState} from 'react'
import { Modal, Portal, Text, PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from "react-native";
import BtnApp from './Button'

const ModalApp = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const styles = StyleSheet.create({
    btn: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
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

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <BtnApp mode="contained" text="Ouvrir" icon={null} handlePress={showModal} style={styles.btn} />
        </View>
      </PaperProvider>
    </>
  )
}

export default ModalApp