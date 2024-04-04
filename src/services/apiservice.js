import axios from 'axios';
// Passing configuration object to axios

const portaApi = '4466';

const ip = '192.168.19.157';

const apiUrlLocal = `http://${ip}:${portaApi}/api`;

const api = axios.create({
	baseURL: apiUrlLocal,
});

export default api;

//location

const geolocation = axios.create({
	baseURL: 'https://api.bigdatacloud.net/data/reverse-geocode-client?',
});

export async function getLocation(latitude, longitude) {
	try {
		return await geolocation.get(
			`latitude=${latitude}&longitude=${longitude}`,
		).data;
	} catch (error) {
		console.error('Erro ao buscar o endereço. ' + error);
	}
}
