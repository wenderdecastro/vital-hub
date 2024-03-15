import { FloatingSection } from '../../components/Misc/FloatingSection';
import { PictureImage } from '../../components/Picture/style';
import { LabelledInput, LargeLabelledInput } from '../../components/Input';
import {
	BlankContainer,
	ContainerBox,
	InputView,
	RowBox,
} from '../../components/Container/style';
import { Spacing } from '../../utils/Components';
import { Button } from '../../components/Buttons';
import { Image, ScrollView } from 'react-native';
import { AltLink, Link } from '../../components/Link/style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Label, MediumText } from '../../components/Text/style';
import { Colors } from '../../utils/Colors';
import { AltButtonContainer } from '../../components/Buttons/style';
import { Divisor } from '../../components/Misc/Divisor';
import { LargeInput } from '../../components/Input/style';

import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';

import * as MediaLibrary from 'expo-media-library';

export const PrescriptionScreen = ({ navigation, route }) => {
	const [isReadOnly, setIsReadOnly] = useState(true);
	const [fileName, setFileName] = useState('Nenhuma foto informada');

	const [photo, setPhoto] = useState(
		route.params == undefined ? null : route.params.photoFile,
	);

	const getFileName = (photoName) => {
		setFileName(photoName);
	};

	useEffect(() => {
		setPhoto(route.params.photoFile);
	}, [photo]);

	const toCamera = async () => {
		const { status: cameraStatus } =
			await Camera.requestCameraPermissionsAsync();
		const { status: mediaStatus } =
			await MediaLibrary.requestPermissionsAsync();
		console.log(mediaStatus);
		console.log(cameraStatus);
		if (mediaStatus == 'granted' && cameraStatus == 'granted')
			navigation.navigate('Camera');
	};

	return (
		<ScrollView>
			<ContainerBox>
				<PictureImage
					resizeMode="cover"
					// style={{ position: 'relative', zIndex: -1 }}
					source={require('../../assets/testmedicprofilepic.jpg')}
				/>
				<FloatingSection
					useremail={'emailusuario@exemplo.com'}
					username={'nome usuario'}
				/>
				<Spacing size={100} />
				<InputView>
					<LargeLabelledInput
						inputHeight={150}
						isReadOnly={isReadOnly}
						labeltext={
							'Descrição da consulta:'
						}
						placeholder={'Descrição'}
					/>
					<LabelledInput
						isReadOnly={isReadOnly}
						labeltext={
							'Diagnóstico do paciente:'
						}
						placeholder={'Diagnóstico'}
					/>
					<LargeLabelledInput
						inputHeight={150}
						isReadOnly={isReadOnly}
						labeltext={'Prescrição médica'}
						placeholder={
							'Prescrição médica'
						}
					/>

					<Spacing size={20} />
					<Label>Exames médicos</Label>
					<BlankContainer>
						{photo == null ? (
							<>
								<MaterialCommunityIcons
									name="file-image-outline"
									size={
										20
									}
									color={
										Colors.gray_v2
									}
									style={{
										paddingTop: 15,
									}}
								/>

								<MediumText
									fontSize={
										16
									}
									textColor={
										Colors.gray_v2
									}
								>
									{
										fileName
									}
								</MediumText>
							</>
						) : (
							<Image
								style={{
									width: '100%',
									height: '100%',

									borderRadius: 10,
								}}
								source={{
									uri: photo,
								}}
							/>
						)}
					</BlankContainer>

					<RowBox
						style={{
							justifyContent:
								'space-between',
						}}
					>
						<AltButtonContainer
							style={{
								flexDirection:
									'row',
								alignItems: 'center',
								gap: 15,
							}}
							onPress={() =>
								toCamera()
							}
						>
							<MaterialCommunityIcons
								name="camera-plus-outline"
								size={24}
								color="white"
							/>
							<MediumText
								style={{
									marginTop: 0,
								}}
								textColor={
									Colors.white
								}
							>
								Enviar
							</MediumText>
						</AltButtonContainer>
						<AltLink
							textDecoration={'none'}
							linkColor={Colors.red}
							style={{
								alignSelf: 'center',
								marginRight: 45,
							}}
						>
							Cancelar
						</AltLink>
					</RowBox>
					<Divisor />

					<LargeInput
						inputHeight={150}
						isReadOnly={true}
						placeholder={
							'Resultado do exame de sangue : tudo normal'
						}
					/>

					<Link
						onPress={() =>
							navigation.replace(
								'Home',
							)
						}
					>
						Voltar
					</Link>
					<Spacing size={40} />
				</InputView>
			</ContainerBox>
		</ScrollView>
	);
};
