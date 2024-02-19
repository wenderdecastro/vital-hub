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
				onPress={() => navigation.navigate('ForgotPassword')}
			/>
			<Button
				title="ResetPassword"
				onPress={() => navigation.navigate('ResetPassword')}
			/>
			<Button
				title="Register"
				onPress={() => navigation.navigate('Register')}
			/>
			<Button
				title="EmailConfirmation"
				onPress={() => navigation.navigate('EmailConfirmation')}
			/>
			<Button
				title="Profile"
				onPress={() => navigation.navigate('Profile')}
			/>
			<Button title="Home" onPress={() => navigation.navigate('Home')} />
		</View>
	);
};
