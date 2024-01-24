import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ModalApp from "./components/ModalApp";

export default function App() {
  return (
    <>
      <ModalApp />
      {/* <StatusBar style="auto" /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
