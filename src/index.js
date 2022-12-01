import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { COLORS } from './constants/colors';
import { useFonts } from 'expo-font';
import AllNavigator from './navigation';
import { bgColor } from './constants/globalStyles';
export default function App() {
    const [loaded] = useFonts({
        'Mukta-Regular': require('../assets/fonts/Mukta-Regular.ttf'),
        'Mukta-Bold': require('../assets/fonts/Mukta-Bold.ttf'),
        'Mukta-Light': require('../assets/fonts/Mukta-Light.ttf'),
    });
    if (!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={bgColor} />
            </View>
        );
    } else {
        return <AllNavigator />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: COLORS.darkTheme.background,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});
