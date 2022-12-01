import { Text, View } from 'react-native';
import { CONSTSTYLES } from '../../constants/globalStyles';
import { styles } from './styles';
const Anime = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={CONSTSTYLES.headerContainer}>
                <Text style={CONSTSTYLES.textHeader}>Anime</Text>
            </View>
        </View>
    );
};

export default Anime;
