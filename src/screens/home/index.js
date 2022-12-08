import { Button, SafeAreaView, StatusBar, View } from 'react-native';
import { CONSTSTYLES } from '../../constants/globalStyles';
import { Header } from '../../components';
import { useTranslation } from 'react-i18next';
const Home = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    return (
        <SafeAreaView style={CONSTSTYLES.AndroidSafeArea}>
            <StatusBar />
            <View style={CONSTSTYLES.mainContainer}>
                <Header navigation={navigation} title={t('HomeBtn')} />
            </View>
        </SafeAreaView>
    );
};
export default Home;
