import { StyleSheet, SafeAreaView } from 'react-native';

import Navigation from './src/navigation';
import HomeScreen from './src/screens/HomeScreen';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    padding: 20,
  },
});
