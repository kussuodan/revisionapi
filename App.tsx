import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BienvenidaScreen from './screens/Inicio/BienvenidaScreen';
import LoginScreen from './screens/Inicio/LoginScreen';
import RegisterScreen from './screens/Inicio/RegisterScreen';
import ForgotPasswordScreen from './screens/Inicio/ForgotPasswordScreen';
import DrawerNavigator from './screens/Menu/MainMenuScreen';
import { AuthProvider } from './screens/Inicio/AuthContext';
import { UserProvider } from './screens/Context/Usuario';
import AgregaVehiculo from './screens/Menu/AgregaVehiculoScreen';
import Pago from './screens/Menu/PagoScreen';
import RecuperaPassword from './screens/Inicio/RecuperaPassword';
import PreguntasScreen from './screens/Ayuda/PreguntasScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar translucent={false} backgroundColor="#f8fafc" barStyle="dark-content" />
      <AuthProvider>
        <UserProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Bienvenida">
              <Stack.Screen name="Bienvenida" component={BienvenidaScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
              <Stack.Screen name="MainMenu" component={DrawerNavigator} options={{ headerShown: false }} />
              <Stack.Screen name="AgregaVehiculo" component={AgregaVehiculo} options={{ headerShown: false }} />
              <Stack.Screen name="Pago" component={Pago} options={{ headerShown: false }} />
              <Stack.Screen
                name="RecuperaPassword"
                component={RecuperaPassword as React.ComponentType<any>}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Preguntas" component={PreguntasScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </UserProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}