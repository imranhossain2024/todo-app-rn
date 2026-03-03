import useTheme, { ColorScheme } from '@/hooks/useTheme';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>New Another App..</Text>
      <Text style={{ color: colors.text }}>Imran Hassan</Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={{ color: colors.text }}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (colors: ColorScheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.bg,
      gap: 10,
    },
    content: {
      color: colors.text,
      fontSize: 22,
      fontWeight: 'bold',
    },
  });
};