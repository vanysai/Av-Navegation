import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindo ao Home!</Text>
      <Image style={styles.image} source={require('../assets/chopper.png')}></Image>

      <Image style={styles.image2} source={require('../assets/luffy.png')}></Image>
      <Image style={styles.image2} source={require('../assets/luffy.png')}></Image>
      <Image style={styles.image2} source={require('../assets/luffy.png')}></Image>
      <Image style={styles.image3} source={require('../assets/luffy.png')}></Image>
      <Image style={styles.image3} source={require('../assets/luffy.png')}></Image>
      <Image style={styles.image3} source={require('../assets/luffy.png')}></Image>
      <Link href="/Cadastro" style={styles.buttonText}>Ir para a tela de cadastro</Link>
      <Link href="/" style={styles.buttonText}>Voltar para o Index</Link>
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
  titulo:{
    fontSize: 26,
    color: '#ff747a',
    fontWeight: 'bold',

  },
  paragraph:{
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
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
    width: 200,
    height: 200,
  },
  image2:{
    width: 100,
    height: 100,
    left: 150,
    margin: 2,
    position: 'absolute',
    alignContent: 'center'
  },
  image3:{
    width: 100,
    height:100,
    right: 0,
    left: 300,
    position: 'absolute',
    margin: 2,
    alignContent: 'center'
  }
});