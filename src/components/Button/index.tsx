import { Pressable, Text } from "react-native";
import { styles } from "./style";

interface IButtonProps {
  text: string;
}

const Button = ({ text }: IButtonProps) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export { Button };
