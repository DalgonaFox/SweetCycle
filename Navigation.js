import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import 'react-native-gesture-handler';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        stackBarActiveTintColor: '#fff',
        stackBarInactiveTintColor: '#d3bad9',
        borderTopWidth:0,
        headerShown: false,
        stackBarShowLabel: false
      }} >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Navigation;