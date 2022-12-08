import { SafeAreaView } from 'react-native';
import { CONSTSTYLES } from '../../constants/globalStyles';
import { Header } from '../../components';
import { useTranslation } from 'react-i18next';
const Anime = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    return (
        <SafeAreaView style={CONSTSTYLES.AndroidSafeArea}>
            <Header navigation={navigation} title={t('AnimeBtn')} />
        </SafeAreaView>
    );
};

export default Anime;
