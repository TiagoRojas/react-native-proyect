import { StyleSheet, Platform, StatusBar } from 'react-native';
import { COLORS } from './colors';
import { IsAndroid, IsDarkTheme } from './phoneSettings';
export const bgColor = () => (IsDarkTheme() ? COLORS.darkTheme.background : null);
export const bgColorSecondary = () => (IsDarkTheme() ? '#fff' : null);
export const textColor = () => (IsDarkTheme() ? COLORS.darkTheme.text.primary : null);
export const textColorSecondary = () => (IsDarkTheme() ? COLORS.darkTheme.text.secondary : null);
export const CONSTSTYLES = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: bgColor(),
    },
    headerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: bgColorSecondary(),
    },
    mainContainer: {
        flex: 1,
        backgroundColor: bgColor(),
    },
    textHeader: {
        color: textColor(),
        fontSize: 24,
        fontFamily: 'Mukta-Regular',
    },
});
