import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Button from "./components/Button";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <View className="flex gap-9">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </View>
    </View>
  );
};

export default App;
