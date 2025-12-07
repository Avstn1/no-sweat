import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import ThemedText from '@/components/ThemedText';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText semi style={styles.title}>
        This is a modal
      </ThemedText>

      <Link href="/" dismissTo style={styles.link}>
        <ThemedText semi style={styles.linkText}>
          Go to home screen
        </ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: '600' },
  link: { marginTop: 15, paddingVertical: 15 },
  linkText: { fontSize: 16, color: '#00f', textDecorationLine: 'underline' },
});
