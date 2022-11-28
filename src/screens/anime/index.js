import { Text, View, Button } from 'react-native';
const Anime = ({ navigation }) => {
    return (
        <View>
            <Text>anime</Text>
            <Button title="h" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

export default Anime;
