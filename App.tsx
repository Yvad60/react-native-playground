import { StatusBar } from "expo-status-bar";
import { Alert, View } from "react-native";
import Button from "./components/Button";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <Button onPress={() => Alert.alert("Hello words")}>Hello world</Button>
    </View>
  );
};

export default App;
