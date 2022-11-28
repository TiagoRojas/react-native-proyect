import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { colors } from './constants/colors';
import { useFonts } from 'expo-font';
import AllNavigator from './navigation';

export default function App() {
    const [loaded] = useFonts({
        'Mukta-Regular': require('../assets/fonts/Mukta-Regular.ttf'),
        'Mukta-Bold': require('../assets/fonts/Mukta-Bold.ttf'),
        'Mukta-Light': require('../assets/fonts/Mukta-Light.ttf'),
    });
    if (!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={colors.primary} />
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
        backgroundColor: colors.background,
        justifyContent: 'center',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});
