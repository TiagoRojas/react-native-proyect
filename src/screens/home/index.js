import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors } from '../../constants/colors';
import { Navbar } from '../../components';
import { styles } from './styles';
const Home = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle={'light-content'} />
            <View style={styles.titleContainer}>
                <Text style={styles.text}>{t('Home')}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Anime')}>
                    <Image style={styles.searchIcon} source={require('../../../assets/lupa.png')} />
                </TouchableOpacity>
            </View>
            <Navbar navigation={navigation} />
        </View>
    );
};
export default Home;
