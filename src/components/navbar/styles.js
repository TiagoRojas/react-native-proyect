import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: colors.divider,
    },
    Button: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    Text: {
        fontFamily: 'Mukta-Regular',
        fontSize: 20,
        color: colors.text.secondary,
    },
});
