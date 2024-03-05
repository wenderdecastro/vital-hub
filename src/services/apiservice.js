import axios from 'axios';
const geolocation = axios.create({
	baseURL: 'https://api.bigdatacloud.net/data/reverse-geocode-client?',
});

// Passing configuration object to axios

export async function getLocation(latitude, longitude) {
	try {
		return await geolocation.get(
			`latitude=${latitude}&longitude=${longitude}`,
		).data;
	} catch (error) {
		console.error('Erro ao buscar o endereço. ' + error);
	}
}
