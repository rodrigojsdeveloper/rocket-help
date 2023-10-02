import { TextInput } from "react-native";
import { styles } from "./style";

interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#7C7C8A"
    />
  );
};

export { Input };
