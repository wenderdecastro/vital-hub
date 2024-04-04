import AsyncStorage from '@react-native-async-storage/async-storage';
import { decode, encode } from 'base-64';
import { jwtDecode } from 'jwt-decode';

if (!global.atob) {
	global.atob = decode;
}

if (!global.btoa) {
	global.btoa = encode;
}

export const userDecodeToken = async () => {
	//capturarando o token
	const token = await AsyncStorage.getItem('token');

	if (token === null) {
		return null;
	}

	//descriptografando o token
	const decoded = jwtDecode(token);

	return {
		jti: decoded.jti,
		role: decoded.role,
		name: decoded.name,
		email: decoded.email,
		cep: decoded.cep,
		logradouro: decoded.logradouro,
		numero: decoded.numero,
	};
};
