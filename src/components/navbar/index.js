import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { colors } from '../../constants/colors';
const Navbar = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.Button}
                onPress={() => navigation.navigate('Anime')}
                activeOpacity={0.7}
                underlayColor={colors.divider}>
                <Text style={styles.Text}>{t('HomeBtn')}</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.Button}
                onPress={() => navigation.navigate('Anime')}
                activeOpacity={0.7}
                underlayColor={colors.divider}>
                <Text style={styles.Text}>{t('MovieBtn')}</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.Button}
                onPress={() => i18n.changeLanguage('en')}
                activeOpacity={0.7}
                underlayColor={colors.divider}>
                <Text style={styles.Text}>{t('SerieBtn')}</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.Button}
                onPress={() => i18n.changeLanguage('es')}
                activeOpacity={0.7}
                underlayColor={colors.divider}>
                <Text style={styles.Text}>{t('AnimeBtn')}</Text>
            </TouchableHighlight>
        </View>
    );
};

export default Navbar;
