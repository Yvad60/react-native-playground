import { FC, PropsWithChildren } from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
  onPress?: () => void;
}
const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onPress }) => {
  return (
    <Pressable className="px-5 py-3 bg-orange-500 rounded-md" onPress={onPress}>
      <Text className="text-white">{children}</Text>
    </Pressable>
  );
};
export default Button;
