import { View, TextInput, Text } from "react-native";
const CustomInput = ({
  placeholder,
  value,
  setValue,
  secureTextEntry,
  error,
}) => {
  return (
    <View className="gap-y-2">
      <Text className="pl-3 text-zinc-400">{placeholder}</Text>
      <TextInput
        className="bg-blue-50 rounded-full px-4 py-3 border-2 border-indigo-100"
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
      {error ? <Text className="pl-3 text-red-400">{error}</Text> : <></>}
    </View>
  );
};
export default CustomInput;
