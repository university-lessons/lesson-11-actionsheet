import { View, Text, Button } from "react-native";
import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";

export default function MyComponent() {
  const { showActionSheetWithOptions } = useActionSheet();

  const options = ["Delete", "Save", "Cancel"];
  const destructiveButtonIndex = 0;
  const cancelButtonIndex = 2;

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        console.log("Selected: ", buttonIndex);
      }
    );
  };

  return (
    <>
      <Text>ActionSheet Example</Text>
      <Button title="Open ActionSheet" onPress={handleOpen} />
    </>
  );
}
