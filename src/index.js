import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { COLORS } from './constants/colors';
import { useFonts } from 'expo-font';
import AllNavigator from './navigation';
import { bgColor } from './constants/globalStyles';

// web: 413601026253-7s694b7asltqgcsogguqmuhbbr21mf53.apps.googleusercontent.com
// android: 413601026253-h11putmppr41d249df9aoc1m74hbiqsm.apps.googleusercontent.com
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
