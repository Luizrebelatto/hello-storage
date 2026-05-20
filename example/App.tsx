import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as HelloStorage from 'hello-storage';

export default function App() {
  const [key, setKey] = useState('foo');
  const [value, setValue] = useState('bar');
  const [stored, setStored] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Key</Text>
      <TextInput style={styles.input} value={key} onChangeText={setKey} />

      <Text style={styles.label}>Value</Text>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />

      <Button title="setItem" onPress={() => HelloStorage.setItem(key, value)} />
      <View style={{ height: 8 }} />
      <Button
        title="getItem"
        onPress={async () => setStored(await HelloStorage.getItem(key))}
      />

      <Text style={styles.result}>Stored: {stored ?? '(null)'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 24, 
    justifyContent: 'center', 
    backgroundColor: '#fff' 
  },
  label: { 
    marginTop: 12, 
    fontWeight: '600' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 8, 
    borderRadius: 6, 
    marginTop: 4 
  },
  result: { 
    marginTop: 24, 
    fontSize: 16 
  },
});
