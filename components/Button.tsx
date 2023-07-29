import { FC, PropsWithChildren } from "react";
import { Alert, Pressable, Text } from "react-native";

interface ButtonProps {
  onPress?: () => void;
}
const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onPress }) => {
  return (
    <Pressable
      className="px-10 py-3 bg-orange-400 rounded-md mt-5"
      onPress={() => Alert.alert(`${children} pressed`)}
    >
      <Text className="text-white">{children}</Text>
    </Pressable>
  );
};
export default Button;
