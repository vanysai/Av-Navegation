import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Cadastro</Text>
      <Image style={styles.image} source={require('../assets/chopper.png')}></Image>

      <br></br>
      <TextInput style={styles.input} placeholder="Seu Nome" />
      <TextInput style={styles.input} placeholder="Seu e-mail" />
      <TextInput style={styles.input} placeholder="Sua Data de Nascimento" />
      <TextInput style={styles.input} placeholder="Seu CPF" />
      <TouchableOpacity style={styles.buttonText}>Salvar o cadastro</TouchableOpacity>
      <Link href="/Home" style={styles.buttonText}>Voltar para a Home</Link>
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
  },
  titulo: {
    fontSize: 26,
    color: '#ff747a',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ff747a',
    borderRadius: 10,
    width: '80%',
  },
  buttonText: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f49ac1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: '#f49ac1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    color: '#f49ac1',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image:{
    width: 290,
    height: 200,
  }
});