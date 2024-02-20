import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';

export const ContainerBox = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background-color: ${Colors.white};
`;
export const ContainerContent = styled.View`
	align-items: center;
	flex: 1;
	width: 88%;
`;

export const Box = styled.View`
	flex: 1;
`;

export const ProfileBox = styled.View`
	position: relative;
	height: 125px;
	width: 85%;
	top: -50px;
	justify-content: center;
	text-align: center;
	background-color: ${Colors.white};
	elevation: 5;
	border-radius: 5px;
`;
