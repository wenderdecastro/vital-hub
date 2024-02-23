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
import { LargeInput } from '../../components/Input/style';
import { Link } from '../../components/Link/style';

export const MedicalRecordScreen = () => {
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
					<LargeInput
						isReadOnly={isReadOnly}
						labeltext={'Descrição da consulta:'}
						placeholder={'Descrição'}
					/>
					<LargeInput
						isReadOnly={isReadOnly}
						labeltext={'Diagnóstico do paciente:'}
						placeholder={'Diagnóstico'}
					/>
					<LargeInput
						InputHeight={33}
						isReadOnly={isReadOnly}
						labeltext={'Prescrição médica'}
						placeholder={'Prescrição médica'}
					/>

					<Button title={'Salvar'} />
					{isReadOnly ? <Button title={'Editar'} /> : <></>}

					<Link>Cancelar</Link>
					<Spacing size={50} />
				</InputView>
			</ContainerBox>
		</ScrollView>
	);
};
