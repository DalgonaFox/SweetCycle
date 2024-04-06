import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
/*Geral*/
  container: {
    flex: 1,
    flexDirection: 'column',
    background: "linear-gradient(#723691, #FB4880);"
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
  person: {
    width: 45,
    height: 45
  },
  usuario: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 20,
    marginTop: 50,
    
  },
/*login*/
    bem: {
    marginLeft: 64.2,
    marginTop: 55.2,
    transform: 'rotate(6.88deg)',
    marginBottom: -230
  },
  vinda: {
    marginLeft: 120,
    marginTop: 158,
    marginBottom: 20
  },
  textbox: {
    borderRadius: 20,
    backgroundColor: 'white',
    color: 'black',
    width: 280,
    height: 45,
    marginBottom: 20,
    paddingLeft: 10
  },
  botaoentrar: {
    color: 'black',
    backgroundColor: '#66097D',
    width: 280,
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaocadastrar: {
    color: 'black',
    backgroundColor: 'white',
    width: 280,
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
  linha: {
    marginVertical: 30,
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 30,
    marginRight: 30,
  },
/*Monte o Perfil Dela*/
  caixasdetexto: {
    flex: 1.5,
  },
  textinput: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  montedela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monte: {
    marginBottom: -30,
    alignItems: 'left',
    marginLeft: -70,
  },
  dela: {
    left: 50,
  },
/*Autocuidado*/
  titulo: {
    marginLeft: 40,
    marginTop: 80,
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paginas:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   categoria: {
    color: 'black',
    backgroundColor: '#fff',
    width: 315,
    height: 98,
    borderRadius: 10,
    alignItems: 'left',
    justifyContent: 'center',
    paddingLeft: 20,
    margin: 20
  },
  seta: {
    width: 40,
    height: 45,
    marginLeft: 240
  },
/*Home*/
  sangue: {
    marginTop: 100
  },
  dias: {
    alignItems: 'center'
  },
  pergunta:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  jadesceu:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20,
    marginBottom: 0
  },
  simnao:{
    width: 108,
    height: 45,
    backgroundColor: '#66097D',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 40,
    margin: 20
  },
  titulojogo:{
    alignItems: 'left',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 50,
    marginLeft: 60
  },
  jogo:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  botaojogo:{
    width: 150,
    height: 97,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 10,
    bottom: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
/*calendario*/
  navegacao:{
    flex: -1,
    flexDirection: 'row',
    marginLeft: 50,
    marginTop: 50,
    marginBottom: -50
  },
  calendariobotao: {
    width: 127,
    height: 45,
    backgroundColor: '#66097D',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: 'center',
  },
  sintobotao:{
    width: 127,
    height: 45,
    backgroundColor: '#fff',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
  },
/*sinto*/
  calendariobotaosinto: {
  width: 127,
  height: 45,
  backgroundColor: '#fff',
  borderTopLeftRadius: 15,
  borderBottomLeftRadius: 15,
  alignItems: 'center',
  },
  sintobotaosinto:{
    width: 127,
    height: 45,
    backgroundColor: '#66097D',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
  },
  sintoma: {
    flex: 1,
    alignItems: 'left',
    marginLeft: 90,
  },
  frase: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'left',
  },
  emoji: {
    width: 49.47,
    height: 49.47,
  },
/*Memoria*/
    titulomemoria: {
        color: 'white',
        margin: 10,
        fontFamily: 'LondrinaSolid-Regular',
        fontSize: 40
    },

    imgTela:{
        width: '90%',
        height: '50%',
    },

    titulo2: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'black',
        margin:10,
    },

    baseDoJogo:{
        marginTop:0,
        marginLeft: 2,
        marginRight: 2,
        flexDirection: 'row', 
        flexWrap: 'wrap',
        width:'100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },

    bloco:{
        width:80,
        height: 80,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin:7,
        borderRadius: 10,
    },

    img:{
        width: 80,
        height: 80,
        borderRadius: 10,
    },

    botao:{
        backgroundColor: 'white',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
    },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FB4880',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#fff'
  },
  popupTexto: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    color: '#fff'
  },

});