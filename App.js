import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
	MontserratAlternates_500Medium,
	MontserratAlternates_600SemiBold,
	MontserratAlternates_700Bold,
	useFonts,
} from '@expo-google-fonts/montserrat-alternates';
import {
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
} from '@expo-google-fonts/quicksand';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/screens/navigation/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/screens/authentication/LoginScreen';
import { ForgotPasswordScreen } from './src/screens/authentication/ForgotPasswordScreen';
import { ResetPasswordScreen } from './src/screens/authentication/ResetPasswordScreen';
import { RegisterScreen } from './src/screens/authentication/RegisterScreen';
import { EmailConfirmationScreen } from './src/screens/authentication/EmailConfirmationScreen';
import { ProfileScreen } from './src/screens/commonuser/ProfileScreen';
import { Home } from './src/screens/commonuser/Home';
import { MedicalRecordScreen } from './src/screens/medic/MedicalRecordScreen';
import { SelectMedicScreen } from './src/screens/commonuser/SelectMedicScreen';
import { PrescriptionScreen } from './src/screens/commonuser/PrescriptionScreen';
import { SelectClinicScreen } from './src/screens/commonuser/SelectClinicScreen';

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
					name="Navigation"
					//component that will be called
					component={Navigation}
					//screen title
					options={{ title: 'Navigation' }}
				/>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ title: 'Login', headerShown: false }}
				/>
				<Stack.Screen
					name="ForgotPassword"
					component={ForgotPasswordScreen}
					options={{ title: 'ForgotPassword', headerShown: false }}
				/>
				<Stack.Screen
					name="ResetPassword"
					component={ResetPasswordScreen}
					options={{ title: 'ResetPassword', headerShown: false }}
				/>
				<Stack.Screen
					name="Register"
					component={RegisterScreen}
					options={{ title: 'Register', headerShown: false }}
				/>

				<Stack.Screen
					name="EmailConfirmation"
					component={EmailConfirmationScreen}
					options={{ title: 'EmailConfirmation', headerShown: false }}
				/>

				<Stack.Screen
					name="Profile"
					component={ProfileScreen}
					options={{ title: 'Profile', headerShown: false }}
				/>

				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: 'Home', headerShown: false }}
				/>
				<Stack.Screen
					name="MedicalRecord"
					component={MedicalRecordScreen}
					options={{ title: 'MedicalRecord', headerShown: false }}
				/>
				<Stack.Screen
					name="Prescription"
					component={PrescriptionScreen}
					options={{ title: 'Prescription', headerShown: false }}
				/>
				<Stack.Screen
					name="SelectClinic"
					component={SelectClinicScreen}
					options={{ title: 'SelectClinic', headerShown: false }}
				/>
				<Stack.Screen
					name="SelectMedic"
					component={SelectMedicScreen}
					options={{ title: 'SelectMedic', headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
