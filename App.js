import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Linking, TextInput } from 'react-native';
import { useState } from 'react';
import randomWords from 'random-words';

export default function App() {

  const [iteration, setIteration] = useState("10");
  const _openSearchesWithDelay = () => {
    for(let i=0; i<parseInt(iteration); i++) {
      setTimeout(() => {
        Linking.openURL("https://www.bing.com/search?q=" + randomWords());
      }, parseInt(iteration) * 1000);
    }
  }

  const _openSearches = () => {
    for(let i=0; i<parseInt(iteration); i++) {
      Linking.openURL("https://www.bing.com/search?q=" + randomWords());
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontFamily: "sans-serif-thin", color: '#fff' }}> Enter No of searches required below </Text>
      <TextInput
        value={iteration}
        onChangeText={text => setIteration(text)}
        keyboardType="number-pad"
        style={{ margin: 20, borderBottomWidth: 1, borderBottomColor: "#fff", padding: 10, fontSize: 20, fontWeight: 'bold', color: '#fff' }}
      ></TextInput>
      <TouchableOpacity style={{ padding: 20, borderBottomColor: "#fff", backgroundColor: "#2c3e50" }} onPress={() => _openSearches()}>
        <Text style={{ color: '#fff', fontFamily: 'sans-serif' }}>Open {iteration} searches immediately</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 20, backgroundColor: "#2c3e50", marginTop: 10 }} onPress={() => _openSearchesWithDelay()}>
        <Text style={{ color: '#fff' }}>Open {iteration} searches with delay</Text>
        <Text style={{ fontSize: 10, color: '#aaa', textAlign: 'center' }}> wait {iteration}s after pressing only once</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#34495e"
  },
});
