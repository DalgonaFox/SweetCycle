import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { estilos } from './styles/styles';

const Separator = () => <View style={estilos.linha} />;


const RegisterScreen = ({ navigation }) => {
  return (
    <View style={estilos.container}>
    {/*Gradiente de Fundo*/}
    <LinearGradient
        colors={['#723691', '#FB4880']}
        style={estilos.background}
      />


      {/*Monte o perfil dela*/}
    <View style={estilos.montedela}>
    <View style={estilos.monte}>
    <Text style={{fontFamily: 'Licorice-Regular', fontSize: 96, color: 'white'}}>Monte seu</Text>
    </View>

    <View style={estilos.dela}>
    <Text style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 96, color: 'white'}}>Perfil</Text>
    </View>
    </View>

  {/*Dados*/}
      <View style={estilos.caixasdetexto}>
      <View style={estilos.textinput}>
      <Text style={{fontFamily: 'Inter', fontSize: 20, color: 'white', left: -100}}>Nome</Text>
      <TextInput style={estilos.textbox}/>
      </View>

      <View style={estilos.textinput}>
      <Text style={{fontFamily: 'Inter', fontSize: 20, color: 'white', left: -95}}>Telefone</Text>
      <TextInput style={estilos.textbox}/>
      </View>

      <View style={estilos.textinput}>
      <Text style={{fontFamily: 'Inter', fontSize: 20, color: 'white', left: -100}}>E-mail</Text>
      <TextInput style={estilos.textbox}/>
      </View>

      <View style={estilos.textinput}>
      <Text style={{fontFamily: 'Inter', fontSize: 20, color: 'white', left: -105}}>Senha</Text>
      <TextInput style={estilos.textbox}/>
      </View>

      <View style={estilos.textinput}>
      <Text style={{fontFamily: 'Inter', fontSize: 20, color: 'white', left: -60}}>Confirmar senha</Text>
      <TextInput style={estilos.textbox}/>
      </View>
      </View>

      <Separator />


{/*Botão Cadastrar */}
      <View style={{flex: 0.4, alignItems: 'center'}}>
      <TouchableOpacity style={estilos.botaoentrar} onPress={() => Navegar.navigate('Home')}>
        <Text style={{fontFamily: 'Inter', fontSize: 20, color: 'white'}}>Cadastrar</Text>
      </TouchableOpacity>
      </View>






      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterScreen;