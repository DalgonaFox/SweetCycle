import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { estilos } from "./styles/styles";
import * as Font from 'expo-font';
import axios from 'axios';

const Separator = () => <View style={estilos.linha} />;

const LoginScreen = ({ navigation }) => {
  useEffect(() => {
    Font.loadAsync({
      "Inter": require("./assets/fonts/Inter-VariableFont_slnt,wght.ttf"),
      "Licorice-Regular": require("./assets/fonts/Licorice-Regular.ttf"),
      "LondrinaSolid-Regular": require("./assets/fonts/LondrinaSolid-Regular.ttf"),
    }).then(() => setFontsLoaded(true));
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.0.2:3000/login", {
        username: username,
        senha: password,
      });

      if (response.status === 200) {
        // Login bem-sucedido, você pode redirecionar para a próxima tela ou realizar outras ações
        Alert.alert("Sucesso", "Login bem-sucedido");
        setLoggedIn(true);
      } else {
        Alert.alert("Erro", "Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      Alert.alert(
        "Erro",
        `Ocorreu um erro ao fazer login ${username} + ${password}`
      );
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigation.navigate("Main");
    }
  }, [loggedIn, navigation]);


  return (
    <View style={estilos.container}>
      {/*Gradiente de Fundo*/}
      <LinearGradient
        colors={["#723691", "#FB4880"]}
        style={estilos.background}
      />

      {/*Bem Vinda*/}
      <View style={estilos.bem}>
        <Text
          style={{
            fontFamily: "Licorice-Regular",
            fontSize: 128,
            color: "white",
          }}
        >
          Bem
        </Text>
      </View>

      <View style={estilos.vinda}>
        <Text
          style={{
            fontFamily: "LondrinaSolid-Regular",
            fontSize: 96,
            color: "white",
          }}
        >
          Vinda
        </Text>
      </View>

      {/*Usuário e Senha*/}
      <View style={estilos.textinput}>
        <Text
          style={{
            fontFamily: "Inter",
            fontSize: 20,
            color: "white",
            left: -95,
          }}
        >
          Usuário
        </Text>
        <TextInput
          style={estilos.textbox}
          onChangeText={setUsername}
          value={username}
          placeholder="Usuário"
        />
      </View>

      <View style={estilos.textinput}>
        <Text
          style={{
            fontFamily: "Inter",
            fontSize: 20,
            color: "white",
            left: -100,
          }}
        >
          Senha
        </Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          style={estilos.textbox}
        />
      </View>

      <Separator />

      {/*Botões Entrar e Cadastrar */}
      <View style={estilos.textinput}>
        <TouchableOpacity style={estilos.botaoentrar} onPress={handleLogin}>
          <Text style={{ fontFamily: "Inter", fontSize: 20, color: "white" }}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.textinput}>
        <Text
          style={{
            fontFamily: "Inter",
            fontSize: 20,
            color: "white",
            alignItems: "center",
            margin: 20,
          }}
        >
          ou
        </Text>
      </View>

      <View style={estilos.textinput}>
        <TouchableOpacity
          style={estilos.botaocadastrar}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ fontFamily: "Inter", fontSize: 20, color: "black" }}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
