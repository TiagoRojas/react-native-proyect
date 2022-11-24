import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Styles} from './styles';
const Header = ({screen, onHandleChange}) => {
	return (
		<View style={Styles.container}>
			<Text style={Styles.text}>{screen}</Text>
			<TouchableOpacity onPress={() => onHandleChange('searchBar')}>
				<Image source={require('../../../assets/lupa.png')} style={Styles.searchIcon} />
			</TouchableOpacity>
		</View>
	);
};
export default Header;
