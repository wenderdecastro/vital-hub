import { useState } from 'react';
import { Container } from '../../components/Container';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { View } from 'react-native';

export const AppointmentMapScreen = () => {
	const [region, SetRegion] = useState({
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});

	return (
		<Container>
			<View style={{ flex: 3 }}>
				<MapView region={region} style={{ flex: 1 }}>
					<Marker
						coordinate={{
							latitude: region.latitude,
							longitude: region.longitude,
						}}
						title={'teste'}
						description={'teste'}
					/>
				</MapView>
			</View>
		</Container>
	);
};
