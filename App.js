import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext'
import ShowScreen from "./src/screens/ShowScreen";
import {Feather,EvilIcons} from '@expo/vector-icons';
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="IndexScreen">
                    <Stack.Screen name="Index" component={IndexScreen} options={({navigation, route}) => ({
                        headerTitle: 'Blogs',
                        headerRight: () => (
                            <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
                                <Feather name="plus" size={24}/>
                            </TouchableOpacity>

                        ),
                    })}
                    />
                    <Stack.Screen name="Show" component={ShowScreen} options={({navigation, route}) => ({
                        headerTitle: 'Blog Details',
                        headerRight: () => (
                            <TouchableOpacity onPress={()=> navigation.navigate('Edit',{id:route.params.id})
                               // navigation.navigate('Edit',{id:route.id})
                            }>
                                <EvilIcons name="pencil" size={36}/>
                            </TouchableOpacity>

                        ),
                    })}/>

                    <Stack.Screen name="Create" component={CreateScreen} options={{
                        title: 'Blog Details',
                        headerStyle: {
                            // backgroundColor: 'lightgray',
                        },
                        headerTintColor: 'black',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}/>
                    <Stack.Screen name="Edit" component={EditScreen} options={{
                        title: 'Edit Blog',
                        headerStyle: {
                            // backgroundColor: 'lightgray',
                        },
                        headerTintColor: 'black',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
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
