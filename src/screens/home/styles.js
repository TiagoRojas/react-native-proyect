import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.background,
        justifyContent: 'space-between',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    titleContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 25,
        paddingHorizontal: 15,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.divider,
    },
    text: {
        color: colors.text.primary,
        fontSize: 28,
        fontFamily: 'Mukta-Regular',
    },
    searchIcon: {
        width: 40,
        height: 40,
    },
});
