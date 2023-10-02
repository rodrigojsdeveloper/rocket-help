import { Text } from "react-native";
import { styles } from "./style";

interface ITitle {
  title: string;
  isLogin?: boolean;
}

const Title = ({ title, isLogin }: ITitle) => {
  return (
    <Text style={[styles.title, isLogin ? styles.login : styles.title]}>
      {title}
    </Text>
  );
};

export { Title };
