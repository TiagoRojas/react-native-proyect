import { View, Text, Image, TouchableHighlight } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { styles } from './style';
import { useTranslation } from 'react-i18next';
import { bgColorSecondary } from '../../constants/globalStyles';
import { AntDesign } from '@expo/vector-icons';
import { IsDarkTheme } from '../../constants/phoneSettings';
const CustomDrawer = (props) => {
    const [t, i18n] = useTranslation();
    return (
        <View style={styles.container}>
            <DrawerContentScrollView contentContainerStyle={styles.drawerContainer}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableHighlight
                onPress={() => {
                    props.navigation.navigate('Settings');
                }}
                activeOpacity={0.7}
                underlayColor={bgColorSecondary()}>
                <View style={styles.settingsContainer}>
                    <View>
                        {IsDarkTheme() ? (
                            <AntDesign name="setting" size={24} color="white" />
                        ) : (
                            <AntDesign name="setting" size={24} color="black" />
                        )}
                    </View>
                    <Text style={styles.settingsBtn}>{t('SettingsBtn')}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};
export default CustomDrawer;
