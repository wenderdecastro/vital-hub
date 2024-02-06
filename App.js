import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
	MontserratAlternates_500Medium,
	MontserratAlternates_600SemiBold,
	MontserratAlternates_700Bold,
	useFonts,
} from "@expo-google-fonts/montserrat-alternates";
import {
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/screens/navigation/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/screens/login/login";

const Stack = createNativeStackNavigator();


export default function App() {
	// load fonts
	let [fontsLoaded, fontError] = useFonts({
		MontserratAlternates_500Medium,
		MontserratAlternates_600SemiBold,
		MontserratAlternates_700Bold,
		Quicksand_400Regular,
		Quicksand_500Medium,
		Quicksand_600SemiBold,
	});

	// abort if font error 
	if (!fontsLoaded && fontError) return null;

	return (
		//involves the structure of navigation
		<NavigationContainer>
		{/* Navigation component */}
		<Stack.Navigator>
		  <Stack.Screen 
			//screen name
			name='Navigation'
			//component that will be called
			component={Navigation}
			//screen title
			options={{title: 'Navigation'}}
		  />
		  <Stack.Screen 
			name='Login'
			component={Login}
			options={{title: 'Login'}}
		  />
  
		</Stack.Navigator>
	  </NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
