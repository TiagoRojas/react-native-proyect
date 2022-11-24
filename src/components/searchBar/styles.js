import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: colors.divider,
		padding: 30
	},
	textInput: {
		width: '80%',
		color: colors.text.primary,
		borderBottomWidth: 1,
		borderBottomColor: colors.primary,
		fontFamily: 'Mukta-Regular',
		fontSize: 16
	},
	text: {
		color: colors.text.secondary,
		fontSize: 12,
		fontFamily: 'Mukta-Regular',
		alignSelf: 'center'
	}
});
