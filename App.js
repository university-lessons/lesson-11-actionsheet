import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { connectActionSheet } from "@expo/react-native-action-sheet";
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
