import {View, TextInput, Text} from 'react-native';
import {styles} from './styles';
import {colors} from '../../constants/colors';
const searchBar = ({onHandleChange}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text} onPress={() => onHandleChange('Inicio')}>
				Regresar
			</Text>
			<TextInput placeholder="Que deseas buscar?" placeholderTextColor={colors.text.primary} style={styles.textInput}></TextInput>
		</View>
	);
};
export default searchBar;
