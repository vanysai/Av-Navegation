import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/chopper.png')}></Image>
      <Text style={styles.titulo}>Bem-vindo ao Chopper Ajuda!</Text>
      <br></br>
      <Text style={styles.titulo2}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</Text>
      <br></br>
      <Link href="/TelaA" style={styles.buttonText}>Ir para a Tela Sobre o App</Link>
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
  titulo2:{
    fontSize: 14,
    textAlign: 'center',
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
});
