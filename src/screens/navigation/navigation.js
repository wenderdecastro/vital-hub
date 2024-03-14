import { Button, View } from 'react-native';
import { Login } from '../authentication/LoginScreen';

export const Navigation = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				gap: 20,
			}}
		>
			<Button
				title="Login"
				onPress={() => navigation.navigate('Login')}
			/>
			<Button
				title="ForgotPassword"
				onPress={() =>
					navigation.navigate('ForgotPassword')
				}
			/>
			<Button
				title="ResetPassword"
				onPress={() =>
					navigation.navigate('ResetPassword')
				}
			/>
			<Button
				title="Register"
				onPress={() => navigation.navigate('Register')}
			/>
			<Button
				title="EmailConfirmation"
				onPress={() =>
					navigation.navigate('EmailConfirmation')
				}
			/>
			<Button
				title="Profile"
				onPress={() => navigation.navigate('Profile')}
			/>
			<Button
				title="Home"
				onPress={() => navigation.navigate('Home')}
			/>

			<Button
				title="MedicalRecord"
				onPress={() =>
					navigation.navigate('MedicalRecord')
				}
			/>
			<Button
				title="SelectMedic"
				onPress={() =>
					navigation.navigate('SelectMedic')
				}
			/>
			<Button
				title="Prescription"
				onPress={() =>
					navigation.navigate('Prescription')
				}
			/>
			<Button
				title="SelectClinic"
				onPress={() =>
					navigation.navigate('SelectClinic')
				}
			/>
			<Button
				title="SelectDate"
				onPress={() =>
					navigation.navigate('SelectDate')
				}
			/>
			<Button
				title="AppointmentMap"
				onPress={() =>
					navigation.navigate('AppointmentMap')
				}
			/>
			<Button
				title="Camera"
				onPress={() => navigation.navigate('Camera')}
			/>
		</View>
	);
};
