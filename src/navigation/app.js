import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Anime, Settings, Movies, Search } from '../screens';
import { useTranslation } from 'react-i18next';
import { CustomDrawer } from '../components';
import { COLORS } from '../constants/colors';
import { textColorSecondary } from '../constants/globalStyles';
import SearchNavigator from './searchBar';
const Drawer = createDrawerNavigator();
const AppNavigator = () => {
    const [t, i18n] = useTranslation();
    return (
        <Drawer.Navigator
            screenOptions={{
                keyboardDismissMode: 'on-drag',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: textColorSecondary(),
                drawerActiveBackgroundColor: COLORS.darkTheme.active,
                headerShown: false,
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: t('HomeBtn') }} />
            <Drawer.Screen
                name="Anime"
                component={Anime}
                options={{ drawerLabel: t('AnimeBtn') }}
            />
            <Drawer.Screen
                name="Movies"
                component={Movies}
                options={{ drawerLabel: t('MovieBtn') }}
            />
            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{ drawerItemStyle: { display: 'none' } }}
            />
            <Drawer.Screen
                name="Search"
                component={Search}
                options={{
                    drawerItemStyle: { display: 'none' },
                }}
            />
        </Drawer.Navigator>
    );
};

export default AppNavigator;
