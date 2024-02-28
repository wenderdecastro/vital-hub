import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';

export const ContainerBox = styled.SafeAreaView`
	flex: 1;
	width: 100%;
	align-items: center;
	background-color: #fff;
`;
export const ContainerContent = styled.View`
	align-items: center;
	flex: 1;
	width: 88%;
	background-color: #fff;
`;

export const Box = styled.View`
	flex: 1;
`;

export const Row = styled.View`
	flex-direction: row;
`;

export const RowBox = styled(Box)`
	flex-direction: row;
	width: 100%;
	align-items: center;
`;

export const CardRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const ProfileBox = styled.View`
	position: absolute;
	z-index: 50;
	height: 125px;
	width: 85%;
	top: 240px;
	justify-content: center;
	text-align: center;
	background-color: ${Colors.white};
	elevation: 5;
	border-radius: 5px;
`;

export const InputRow = styled.View`
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`;

export const InputView = styled.View`
	align-items: center;
	flex: 1;
	width: 88%;
	background-color: #fff;
`;

export const BlankContainer = styled.View`
	height: 150px;
	background-color: ${Colors.white_v1};
	justify-content: center;
	vertical-align: baseline;
	align-items: center;
	gap: 10px;
	margin: 10px 0px;

	flex-direction: row;
	width: 100%;
	border-radius: 5px;
`;
