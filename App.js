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
import { SelectDateScreen } from './src/screens/commonuser/SelectDateScreen';
import { AppointmentMapScreen } from './src/screens/commonuser/AppointmentMapScreen';
import { Main } from './src/screens/main/main';
import { CameraModal } from './src/screens/commonuser/CameraModal';

const Stack = createNativeStackNavigator();

export default function App() {
	// load fonts
	const [fontsLoaded, fontsError] = useFonts({
		MontserratAlternates_500Medium,
		MontserratAlternates_600SemiBold,
		MontserratAlternates_700Bold,
		Quicksand_400Regular,
		Quicksand_500Medium,
		Quicksand_600SemiBold,
	});

	// abort if font error
	if (!fontsLoaded) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		//involves the structure of navigation

		<NavigationContainer initialRouteName="Home">
			{/* Navigation component */}

			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{
						title: 'Login',
						headerShown: false,
					}}
				/>
				<Stack.Screen
					//screen name
					name="Main"
					//component that will be called
					component={Main}
					//screen title
					options={{
						title: 'Main',
					}}
				/>
				<Stack.Screen
					//screen name
					name="Navigation"
					//component that will be called
					component={Navigation}
					//screen title
					options={{ title: 'Navigation' }}
				/>

				<Stack.Screen
					name="ForgotPassword"
					component={ForgotPasswordScreen}
					options={{ title: 'ForgotPassword' }}
				/>
				<Stack.Screen
					name="ResetPassword"
					component={ResetPasswordScreen}
					options={{ title: 'ResetPassword' }}
				/>
				<Stack.Screen
					name="Register"
					component={RegisterScreen}
					options={{ title: 'Register' }}
				/>

				<Stack.Screen
					name="EmailConfirmation"
					component={EmailConfirmationScreen}
					options={{ title: 'EmailConfirmation' }}
				/>

				<Stack.Screen
					name="Profile"
					component={ProfileScreen}
					options={{ title: 'Profile' }}
				/>

				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: 'Home' }}
				/>
				<Stack.Screen
					name="MedicalRecord"
					component={MedicalRecordScreen}
					options={{ title: 'MedicalRecord' }}
				/>
				<Stack.Screen
					name="Prescription"
					component={PrescriptionScreen}
					options={{ title: 'Prescription' }}
				/>
				<Stack.Screen
					name="SelectClinic"
					component={SelectClinicScreen}
					options={{ title: 'SelectClinic' }}
				/>
				<Stack.Screen
					name="SelectMedic"
					component={SelectMedicScreen}
					options={{ title: 'SelectMedic' }}
				/>
				<Stack.Screen
					name="SelectDate"
					component={SelectDateScreen}
					options={{ title: 'SelectDate' }}
				/>
				<Stack.Screen
					name="Camera"
					component={CameraModal}
					options={{ title: 'Camera' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
