import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Anime } from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false, animation: 'none' }}
            />
            <Stack.Screen
                name="Anime"
                component={Anime}
                options={{ headerShown: false, animation: 'none' }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
