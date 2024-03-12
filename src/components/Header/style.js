import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../utils/Colors';
import { RawText } from '../Text/style';

export const HeaderContainer = styled(LinearGradient).attrs({
	colors: [Colors.primary_v2, Colors.secondary],
	start: { x: -0.05, y: 1.08 },
	end: { x: 1, y: 0 },
})`
	width: 100%;
	padding: 20px;
	padding-top: 60px;
	height: 20%;

	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	border-radius: 0px 0px 15px 15px;
	box-shadow: 0px 4px 15px #00000014;
`;

export const WelcomeText = styled(RawText)`
	margin: 0;
`;

export const UserBox = styled.TouchableOpacity`
	gap: 10px;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const UserPicture = styled.Image`
	width: 60px;
	height: 60px;
	border-radius: 5px;
`;

export const UserDataContainer = styled.View`
	align-items: flex-start;
	justify-content: center;
`;

export const UserName = styled.Text`
	color: #fbfbfb;
	font-size: 16px;
	margin-top: 5px;
	font-family: 'MontserratAlternates_600SemiBold';
`;
