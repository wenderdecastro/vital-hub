import { useEffect, useRef, useState } from 'react';
import { Container } from '../../components/Container';
import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';
import { Title } from '../../components/Title/style';
import { Label } from '../../components/Text/style';
import { LabelledInput, ShortLabelledInput } from '../../components/Input';
import { Link } from '../../components/Link/style';
import { StatusBar } from 'expo-status-bar';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
	LocationAccuracy,
	getCurrentPositionAsync,
	requestForegroundPermissionsAsync,
	watchPositionAsync,
} from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { InputRow } from '../../components/Container/style';

export const AppointmentMapScreen = ({ navigation }) => {
	const [initialPosition, setInitialPosition] = useState(null);

	const mapReference = useRef(null);

	const [finalPosition, setFinalPosition] = useState({
		latitude: -10.820694,
		longitude: -42.72046,
	});

	async function reloadMapView() {
		if (mapReference.current && initialPosition)
			await mapReference.current.fitToCoordinates(
				[
					{
						latitude: initialPosition.coords
							.latitude,
						longitude: initialPosition
							.coords.longitude,
					},
					{
						latitude: finalPosition.latitude,
						longitude: finalPosition.longitude,
					},
				],
				{
					edgePadding: {
						top: 60,
						right: 60,
						bottom: 60,
						left: 60,
					},
					animated: true,
				},
			);
	}

	async function getLocation() {
		const { granted } = await requestForegroundPermissionsAsync();

		if (granted) {
			const location = await getCurrentPositionAsync();
			setInitialPosition(location);
		}
	}

	useEffect(() => {
		getLocation();
		watchPositionAsync(
			{
				accuracy: LocationAccuracy.Highest,
				timeInterval: 1000,
				distanceInterval: 1,
			},
			async (response) => await setInitialPosition(response),

			mapReference.current?.animateCamera({
				pitch: 60,
				center: response.coords,
			}),
		);
	}, [1000]);

	useEffect(() => {
		reloadMapView();
	}, [initialPosition]);

	const windowWidth = Dimensions.get('window').width;

	return (
		<>
			<StatusBar style="auto" />
			<View
				style={{
					height: '45%',
					windowWidth,
				}}
			>
				{initialPosition != null ? (
					<MapView
						style={styles.map}
						loadingEnabled
						ref={mapReference}
						initialRegion={{
							latitude: initialPosition
								.coords
								.latitude,
							longitude: initialPosition
								.coords
								.longitude,
							latitudeDelta: 2,
							longitudeDelta: 2,
						}}
						provider={PROVIDER_GOOGLE}
						customMapStyle={grayMapStyle}
					>
						<MapViewDirections
							origin={{
								latitude: initialPosition
									.coords
									.latitude,
								longitude: initialPosition
									.coords
									.longitude,
							}}
							destination={
								finalPosition
							}
							apikey={
								'AIzaSyAqIF5MN4yo8ZHwg9WsKP14I-fAK6hpKWY'
							}
							strokeColor="#496BBA"
							strokeWidth={5}
						/>
						<Marker
							coordinate={{
								latitude: initialPosition
									.coords
									.latitude,
								longitude: initialPosition
									.coords
									.longitude,
							}}
							title="senai"
							pinColor={'blue'}
						/>
						<Marker
							coordinate={{
								latitude: finalPosition.latitude,
								longitude: finalPosition.longitude,
							}}
							title="xique xique bahia"
							pinColor={'blue'}
						/>
					</MapView>
				) : (
					<>
						<Title> map isnt working</Title>
						<ActivityIndicator />
					</>
				)}
			</View>

			<Container>
				<Title>Clinica x</Title>
				<Label
					style={{
						alignSelf: 'center',
						marginTop: -3,
					}}
				>
					Sao Paulo Sp
				</Label>
				<LabelledInput
					isReadOnly={true}
					labeltext="Endereço"
					placeholder="Rua tal de tal de tal, 333"
				/>
				<InputRow>
					<ShortLabelledInput
						isReadOnly={true}
						labeltext={'Numero:'}
						placeholder={'000'}
					/>
					<ShortLabelledInput
						isReadOnly={true}
						labeltext={'Bairro:'}
						placeholder={
							'ex: Vila Chuca - SP'
						}
					/>
				</InputRow>
				<Link
					onPress={() => {
						navigation.replace('Main');
					}}
				>
					Voltar
				</Link>
			</Container>
		</>
	);
};

const styles = StyleSheet.create({
	map: { flex: 1, width: '100%' },
	// map: { height: 500, width: 600 },
});

const grayMapStyle = [
	{
		elementType: 'geometry',
		stylers: [
			{
				color: '#E1E0E7',
			},
		],
	},
	{
		elementType: 'geometry.fill',
		stylers: [
			{
				saturation: -5,
			},
			{
				lightness: -5,
			},
		],
	},
	{
		elementType: 'labels.icon',
		stylers: [
			{
				visibility: 'on',
			},
		],
	},
	{
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#FBFBFB',
			},
		],
	},
	{
		elementType: 'labels.text.stroke',
		stylers: [
			{
				color: '#33303E',
			},
		],
	},
	{
		featureType: 'administrative',
		elementType: 'geometry',
		stylers: [
			{
				color: '#fbfbfb',
			},
		],
	},
	{
		featureType: 'administrative.country',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#fbfbfb',
			},
		],
	},
	{
		featureType: 'administrative.land_parcel',
		stylers: [
			{
				visibility: 'on',
			},
		],
	},
	{
		featureType: 'administrative.locality',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#fbfbfb',
			},
		],
	},
	{
		featureType: 'poi',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#fbfbfb',
			},
		],
	},
	{
		featureType: 'poi.business',
		stylers: [
			{
				visibility: 'on',
			},
		],
	},
	{
		featureType: 'poi.park',
		elementType: 'geometry',
		stylers: [
			{
				color: '#66DA9F',
			},
		],
	},
	{
		featureType: 'poi.park',
		elementType: 'labels.text',
		stylers: [
			{
				visibility: 'on',
			},
		],
	},
	{
		featureType: 'poi.park',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#fbfbfb',
			},
		],
	},
	{
		featureType: 'poi.park',
		elementType: 'labels.text.stroke',
		stylers: [
			{
				color: '#1B1B1B',
			},
		],
	},
	{
		featureType: 'road',
		stylers: [
			{
				visibility: 'on',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#C6C5CE',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#FBFBFB',
			},
		],
	},
	{
		featureType: 'road.arterial',
		elementType: 'geometry',
		stylers: [
			{
				color: '#ACABB7',
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [
			{
				color: '#8C8A97',
			},
		],
	},
	{
		featureType: 'road.highway.controlled_access',
		elementType: 'geometry',
		stylers: [
			{
				color: '#8C8A97',
			},
		],
	},
	{
		featureType: 'road.local',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#fbfbfb',
			},
		],
	},
	{
		featureType: 'transit',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#fbfbfb',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'geometry',
		stylers: [
			{
				color: '#8EA5D9',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'labels.text.fill',
		stylers: [
			{
				color: '#fbfbfb',
			},
		],
	},
];
