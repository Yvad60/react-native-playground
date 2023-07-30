import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Text, View } from "react-native";

const App = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <StatusBar style="auto" />
      <Text className="text-white text-lg">Button has been clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount((prevCount) => prevCount + 1)} />
    </View>
  );
};

export default App;
