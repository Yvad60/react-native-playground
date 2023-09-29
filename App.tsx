import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";

const App = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-white text-lg">Hello react native</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
