import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Navbar } from '../../components';
import { styles } from './styles';
import { CONSTSTYLES } from '../../constants/globalStyles';
const Home = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    return (
        <SafeAreaView style={CONSTSTYLES.AndroidSafeArea}>
            <View style={styles.container}>
                <View style={CONSTSTYLES.headerContainer}>
                    <Text style={CONSTSTYLES.textHeader}>{t('Home')}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Image
                            style={styles.searchIcon}
                            source={require('../../../assets/lupa.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Navbar navigation={navigation} />
            </View>
        </SafeAreaView>
    );
};
export default Home;
