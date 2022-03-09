import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <Provider>
        <NavigationContainer>
          <Stack.Navigator  initialRouteName="IndexScreen">
            <Stack.Screen name="Index" component={IndexScreen} options={{
              title: 'Blog',
              headerStyle: {
                // backgroundColor: 'lightgray',
              },
              headerTintColor: 'black',
              headerTitleAlign:'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf:'center'
              },
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
