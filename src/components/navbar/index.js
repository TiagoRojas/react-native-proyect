import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Styles} from './styles';

const NavBar = ({changeScreenName}) => {
	return (
		<View style={Styles.NavContainer}>
			<TouchableOpacity onPress={() => changeScreenName('Inicio')} activeOpacity={0.7}>
				<Text style={Styles.ButtonText}>Inicio</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => changeScreenName('Peliculas')} activeOpacity={0.7}>
				<Text style={Styles.ButtonText}>Peliculas</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => changeScreenName('Series')} activeOpacity={0.7}>
				<Text style={Styles.ButtonText}>Series</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => changeScreenName('Anime')} activeOpacity={0.7}>
				<Text style={Styles.ButtonText}>Anime</Text>
			</TouchableOpacity>
		</View>
	);
};

export default NavBar;
