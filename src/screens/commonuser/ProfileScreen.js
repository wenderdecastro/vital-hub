import { FloatingSection } from '../../components/Misc/FloatingSection';
import { PictureImage } from '../../components/Picture/style';
import { LabelledInput, ShortLabelledInput } from '../../components/Input';
import {
	ContainerBox,
	InputRow,
	InputView,
} from '../../components/Container/style';
import { Spacing } from '../../utils/Components';
import { Button } from '../../components/Buttons';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import { AltButtonContainer, ButtonText } from '../../components/Buttons/style';
import { Colors } from '../../utils/Colors';
import { Link } from '../../components/Link/style';

export const ProfileScreen = () => {
	const [isReadOnly, setIsReadOnly] = useState(true);
	return (
		<ScrollView>
			<ContainerBox>
				<PictureImage
					resizeMode="cover"
					// style={{ position: 'relative', zIndex: -1 }}
					source={require('../../assets/testprofilepic.png')}
				/>
				<FloatingSection
					useremail={'emailusuario@exemplo.com'}
					username={'nome usuario'}
				/>
				<Spacing size={100} />
				<InputView>
					<LabelledInput
						isReadOnly={isReadOnly}
						labeltext={'Data de nascimento:'}
						placeholder={'dd/mm/aaaa'}
					/>
					<LabelledInput
						isReadOnly={isReadOnly}
						labeltext={'CPF:'}
						placeholder={'XXX.XXX.XXX-XX'}
					/>
					<LabelledInput
						isReadOnly={isReadOnly}
						labeltext={'Endereço'}
						placeholder={'ex: Rua Fulano de Tal, 2'}
					/>
					<InputRow>
						<ShortLabelledInput
							isReadOnly={isReadOnly}
							labeltext={'CEP:'}
							placeholder={'00000-000'}
						/>
						<ShortLabelledInput
							isReadOnly={isReadOnly}
							labeltext={'Cidade:'}
							placeholder={'ex: São Paulo - SP'}
						/>
					</InputRow>
					<Button title={'Salvar'} />
					{isReadOnly == true ? (
						<Button
							title={'Editar'}
							buttonFn={() => setIsReadOnly(false)}
						/>
					) : (
						<Link onPress={() => setIsReadOnly(true)}>
							Cancelar
						</Link>
					)}

					<Spacing size={30} />

					<AltButtonContainer buttonColor={Colors.gray_v5}>
						<ButtonText>Sair do App</ButtonText>
					</AltButtonContainer>
					<Spacing size={50} />
				</InputView>
			</ContainerBox>
		</ScrollView>
	);
};
