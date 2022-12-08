import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';
import { Header } from '../../components';
import { CONSTSTYLES } from '../../constants/globalStyles';

const Movies = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    return (
        <SafeAreaView style={CONSTSTYLES.AndroidSafeArea}>
            <Header navigation={navigation} title={t('MovieBtn')} />
        </SafeAreaView>
    );
};
export default Movies;
