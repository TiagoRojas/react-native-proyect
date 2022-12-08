import { useTranslation } from 'react-i18next';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { Header } from '../../../components';
import { CONSTSTYLES } from '../../../constants/globalStyles';
import { styles } from './styles';
const SettingsMain = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    return (
        <SafeAreaView style={CONSTSTYLES.AndroidSafeArea}>
            <StatusBar />
            <View style={CONSTSTYLES.mainContainer}>
                <Header navigation={navigation} title={t('SettingsBtn')} />
            </View>
        </SafeAreaView>
    );
};
export default SettingsMain;
