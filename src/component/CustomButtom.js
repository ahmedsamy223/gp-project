import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({ text, onPress }) => (
  <TouchableOpacity
    className="bg-blue-500 rounded-3xl p-4 items-center"
    onPress={onPress}
  >
    <Text className="text-white text font-black text-xl">{text}</Text>
  </TouchableOpacity>
);
export default CustomButton;
