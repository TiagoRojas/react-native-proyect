import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {useState} from 'react';
import {NavBar, Header, SearchBar} from './components';
import {colors} from './constants/colors';
import {useFonts} from 'expo-font';

export default function App() {
	const [currentScreen, setCurrentScreen] = useState('Inicio');
	const [changeNav, setChangeNav] = useState('Inicio');
	const [loaded] = useFonts({
		'Mukta-Regular': require('../assets/fonts/Mukta-Regular.ttf'),
		'Mukta-Bold': require('../assets/fonts/Mukta-Bold.ttf'),
		'Mukta-Light': require('../assets/fonts/Mukta-Light.ttf')
	});
	const changeScreenName = (name) => {
		setCurrentScreen(name);
	};
	const onHandleChange = (text) => {
		setChangeNav(text);
	};
	if (!loaded) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color={colors.primary} />
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<View style={styles.mainContainer}>
					{changeNav === 'Inicio' ? (
						<>
							<Header screen={currentScreen} onHandleChange={onHandleChange} />
							<NavBar changeScreenName={changeScreenName} />
						</>
					) : (
						<SearchBar onHandleChange={onHandleChange} />
					)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: colors.background,
		justifyContent: 'center'
	},
	mainContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between'
	}
});
