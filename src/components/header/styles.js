import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const Styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		padding: 30,
		backgroundColor: colors.divider
	},
	text: {
		color: colors.text.primary,
		fontSize: 24,
		fontFamily: 'Mukta-Regular'
	},
	searchIcon: {
		width: 35,
		height: 35
	}
});
