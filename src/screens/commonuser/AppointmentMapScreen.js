import { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Title } from '../../components/Title/style';
import { Label } from '../../components/Text/style';
import { LabelledInput } from '../../components/Input';
import { getLocation } from '../../services/apiservice';

export const AppointmentMapScreen = () => {
	useEffect(() => {
		const data = getLocation(region.latitude, region.longitude);
		console.log(data);
	}, []);

	const [region, SetRegion] = useState({
		latitude: -10.820694,
		longitude: -42.72046,
		latitudeDelta: 0.005,
		longitudeDelta: 0.005,
	});
	const [adress, setAdress] = useState({});

	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;
	return (
		<>
			<MapView
				initialRegion={region}
				// region={region}
				style={{ height: '45%', windowWidth }}
				loadingEnabled
				mapType="satellite"
			>
				<Marker
					coordinate={region}
					pinColor="#FF0000"
					title={'Clinica Xique-Xique Palace'}
					description={'Aqui será feita sua consulta.'}
				/>
			</MapView>

			<Container>
				<Title>Clinica x</Title>
				<Label style={{ alignSelf: 'center', marginTop: -3 }}>
					Sao Paulo Sp
				</Label>
				<LabelledInput
					isReadOnly={true}
					labeltext="Endereço"
					placeholder="Rua tal de tal de tal, 333"
				/>
			</Container>
		</>
	);
};
