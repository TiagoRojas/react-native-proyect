import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { bgColor } from '../../constants/globalStyles';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: bgColor(),
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
        borderBottomColor: COLORS.divider,
    },
    searchIcon: {
        width: 40,
        height: 40,
    },
});
