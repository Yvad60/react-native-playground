import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-white text-lg">Hello react native</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
