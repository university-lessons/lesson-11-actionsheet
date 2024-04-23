import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MyComponent from "./src/components/MyComponent";

function App() {
  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <MyComponent />
        <StatusBar style="auto" />
      </View>
    </ActionSheetProvider>
  );
}

const ConnectedApp = connectActionSheet(App);

export default ConnectedApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
