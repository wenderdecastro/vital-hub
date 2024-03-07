import { Colors } from '../../utils/Colors';
import { Box, RowBox } from '../Container/style';
import { RawText } from '../Text/style';
import {
	HeaderContainer,
	UserBox,
	UserDataContainer,
	UserPicture,
	UserName,
	WelcomeText,
} from './style';
import { MaterialIcons } from '@expo/vector-icons';

export const Header = ({ profileClick }) => {
	return (
		<HeaderContainer>
			<RowBox style={{ justifyContent: 'space-between' }}>
				<UserBox onPress={profileClick}>
					<UserPicture
						source={{
							uri: 'https://github.com/wenderdecastro.png',
						}}
					/>
					<UserDataContainer>
						<WelcomeText fontSize={16} textColor={Colors.gray_v2}>
							Bem Vindo!
						</WelcomeText>
						<UserName>Dedezinho Megamente</UserName>
					</UserDataContainer>
				</UserBox>

				{/* material icons */}
				<MaterialIcons
					name="notifications"
					size={25}
					color={Colors.white}
				/>
			</RowBox>
		</HeaderContainer>
	);
};
