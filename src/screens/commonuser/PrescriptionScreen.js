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
import { ScrollView } from 'react-native';
import { useState } from 'react';
import { AltLink, Link } from '../../components/Link/style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Label, MediumText } from '../../components/Text/style';
import { Colors } from '../../utils/Colors';
import { AltButtonContainer } from '../../components/Buttons/style';
import { Divisor } from '../../components/Misc/Divisor';
import { LargeInput } from '../../components/Input/style';

export const PrescriptionScreen = () => {
	const [isReadOnly, setIsReadOnly] = useState(true);
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
						labeltext={'Descrição da consulta:'}
						placeholder={'Descrição'}
					/>
					<LabelledInput
						isReadOnly={isReadOnly}
						labeltext={'Diagnóstico do paciente:'}
						placeholder={'Diagnóstico'}
					/>
					<LargeLabelledInput
						inputHeight={150}
						isReadOnly={isReadOnly}
						labeltext={'Prescrição médica'}
						placeholder={'Prescrição médica'}
					/>

					<Spacing size={20} />
					<Label>Exames médicos</Label>
					<BlankContainer>
						<MaterialCommunityIcons
							name="file-image-outline"
							size={20}
							color={Colors.gray_v2}
							style={{ paddingTop: 15 }}
						/>

						<MediumText fontSize={16} textColor={Colors.gray_v2}>
							Nenhuma foto informada
						</MediumText>
					</BlankContainer>

					<RowBox style={{ justifyContent: 'space-between' }}>
						<AltButtonContainer>
							<MaterialCommunityIcons
								name="camera-plus-outline"
								size={24}
								color="white"
							/>
						</AltButtonContainer>
						<AltLink
							textDecoration={'none'}
							linkColor={Colors.red}
							style={{ alignSelf: 'center', marginRight: 45 }}
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

					<Link>Voltar</Link>
					<Spacing size={40} />
				</InputView>
			</ContainerBox>
		</ScrollView>
	);
};