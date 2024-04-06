import React from 'react';
import { View, Text, Button, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { estilos } from './styles/styles';


const MainScreen = ({ navigation }) => {
  return (
    <View style={estilos.container}>
    {/*Gradiente de Fundo*/}
    <LinearGradient
        colors={['#723691', '#FB4880']}
        style={estilos.background}
      />

      {/*Usuario*/}
    <View style={estilos.usuario}>
    <TouchableOpacity>
       <Image source={require('./icons/person.png')} style={estilos.person}/>
    </TouchableOpacity>
    </View>

    {/*Gota*/}
      <View style={estilos.dias}>
      <Image source={require('./icons/sangue.png')} style={estilos.sangue}/>
      <Text style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 40, color: '#fff', marginTop: -190}}> faltam</Text>
      <Text style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 40, color: '#fff'}}> 5</Text>
      <Text style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 40, color: '#fff', marginBottom: 50}}> dias </Text>
      </View>

      {/*Já desceu?*/}
      <View style={estilos.pergunta}>
      <Text style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 40, color: 'white'}}>Já Desceu?</Text>
      </View>
      
      <View style={estilos.jadesceu}>
      <View>
      <TouchableOpacity style={estilos.simnao} onPress={() => Navegar.navigate('')}>
        <Text style={{fontFamily: 'Inter', fontSize: 24, color: 'white', marginTop: 5}}>Sim</Text>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity style={estilos.simnao} onPress={() => Navegar.navigate('')}>
        <Text style={{fontFamily: 'Inter', fontSize: 24, color: 'white', marginTop: 5}}>Não</Text>
      </TouchableOpacity>
      </View>
      
      </View>

      {/*Jogos*/}
      <View style={estilos.titulojogo}>
      <Text style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 40, color: 'white'}}>Jogos</Text>
      </View>

      <View style={estilos.jogo}>
      <View>
      <TouchableOpacity style={estilos.botaojogo} onPress={() => Navegar.navigate('')}>
      <Text style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 32, color: '#66097D'}}>Memória</Text>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity style={estilos.botaojogo} onPress={() => Navegar.navigate('')}>
      <Text style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 32, color: '#66097D'}}>Forca</Text>
      </TouchableOpacity>
      </View>
      </View>

      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default MainScreen;



