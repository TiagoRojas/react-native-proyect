import { StyleSheet, Platform, StatusBar } from 'react-native';
import { COLORS } from './colors';
import { IsDarkTheme } from './phoneSettings';
export const bgColor = () => (IsDarkTheme() ? COLORS.darkTheme.background : null);
export const bgColorSecondary = () => (IsDarkTheme() ? COLORS.darkTheme.divider : null);
export const textColor = () => (IsDarkTheme() ? COLORS.darkTheme.text.primary : null);
export const textColorSecondary = () => (IsDarkTheme() ? COLORS.darkTheme.text.secondary : null);
export const CONSTSTYLES = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: bgColor(),
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 25,
        paddingHorizontal: 15,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: bgColor(),
    },
    textHeader: {
        color: COLORS.darkTheme.text.primary,
        fontSize: 28,
        fontFamily: 'Mukta-Regular',
    },
});
