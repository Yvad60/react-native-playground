import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Alert, Button, Pressable, Text, View } from "react-native";

const App: FC = () => {
  return (
    <View className="items-center justify-center flex-1 gap-8 bg-slate-200">
      <StatusBar style="auto" />
      <Button
        title="Click me"
        onPress={() => Alert.alert("Hello world from default button ")}
        color="green"
      />
      <Pressable
        onPress={() => Alert.alert("Hello wold from custom button")}
        className="px-5 py-3 bg-orange-500 rounded-md"
      >
        <Text className="text-white">Custom button</Text>
      </Pressable>
    </View>
  );
};

export default App;
