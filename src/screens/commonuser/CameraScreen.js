import { StatusBar } from 'expo-status-bar';
import {
	Alert,
	Image,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';

import * as MediaLibrary from 'expo-media-library';

export function CameraScreen() {
	const [photo, setPhoto] = useState(null);
	const [lens, setLens] = useState(Camera.Constants.Type.back);
	const [openModal, setOpenModal] = useState(false);
	const cameraRef = useRef(null);

	useEffect(() => {
		(async () => {
			const { status: cameraStatus } =
				await Camera.requestCameraPermissionsAsync();
			const { status: mediaStatus } =
				await MediaLibrary.requestPermissionsAsync();
			// const ratios = await Camera.getSupportedRatiosAsync();
			// console.log(ratios);
		})();
	}, []);

	async function CapturePhoto() {
		if (cameraRef) {
			const photo =
				await cameraRef.current.takePictureAsync();
			setPhoto(photo.uri);
			setOpenModal(true);
			console.log(photo);
		}
	}

	async function SavePhoto() {
		if (photo) {
			await MediaLibrary.createAssetAsync(photo)
				.then(() => {
					Alert.alert('Success', 'Photo saved.');
				})
				.catch((error) => {
					alert('Error on processing image');
				});
		}
	}

	function ClearPhoto() {
		setPhoto(null);
		setOpenModal(false);
	}

	return (
		<View style={styles.container}>
			<Camera
				type={lens}
				style={styles.camera}
				ref={cameraRef}
				ratio="16:9"
			>
				<View style={styles.viewFlip}>
					<TouchableOpacity
						onPress={() => {
							setLens(
								lens ==
									CameraType.front
									? CameraType.back
									: CameraType.front,
							);
						}}
					>
						<Text style={styles.txtFlip}>
							trocar
						</Text>
					</TouchableOpacity>
				</View>
			</Camera>
			<TouchableOpacity
				style={styles.btnCapture}
				onPress={() => CapturePhoto()}
			>
				<FontAwesome
					name="camera"
					size={23}
					color={'#fff'}
				/>
			</TouchableOpacity>

			<Modal
				animationType="slide"
				transparent={false}
				visible={openModal}
			>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
						padding: 30,
					}}
				>
					<Image
						style={{
							width: '100%',
							height: 500,
							borderRadius: 10,
						}}
						source={{ uri: photo }}
					/>
					<View
						style={{
							margin: 0,
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<TouchableOpacity
							style={styles.btnCancel}
							onPress={() =>
								ClearPhoto()
							}
						>
							<FontAwesome
								name="trash"
								size={34}
								color={
									'#ff0000'
								}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.btnUpload}
							onPress={() =>
								SavePhoto()
							}
						>
							<FontAwesome
								name="save"
								size={34}
								color={
									'#000000'
								}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	camera: {
		height: '80%',
		flex: 1,
		width: '100%',
	},
	viewFlip: {
		flex: 1,
		backgroundColor: 'transparent',
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	btnFlip: {
		position: 'absolute',
		bottom: 20,
		left: 20,
		padding: 15,
	},
	txtFlip: {
		fontSize: 20,
		color: '#fff',
		marginBottom: 20,
	},
	btnCapture: {
		margin: 20,
		padding: 20,
		borderRadius: 8,
		backgroundColor: '#121212',
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnCancel: {
		margin: 20,

		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnReload: {
		margin: 40,
		padding: 20,
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
