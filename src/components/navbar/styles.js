import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants/colors';

export const Styles = StyleSheet.create({
	NavContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: Dimensions.get('screen').width,
		backgroundColor: colors.divider
	},
	ButtonText: {
		fontSize: 16,
		padding: 25,
		color: colors.text.primary,
		fontFamily: 'Mukta-Regular'
	}
});
