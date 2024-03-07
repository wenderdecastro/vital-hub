import styled from 'styled-components/native';

export const ModalContainer = styled.View`
	display: ${(props) => (props.visible ? 'flex' : 'none')};
	background-color: #fff;
	width: 90%;
	height: ${(props) => (props.modalHeight ? props.modalHeight : 60)}%;
	z-index: 10;
	border-radius: 15px;
	padding: 40px 30px;
	justify-content: space-between;
	align-items: center;
`;
export const BottomModalContainer = styled(ModalContainer)`
	width: 100%;
	height: 72%;
	border-radius: 15px 15px 0px 0px;
	justify-content: flex-start;
`;

export const ModalBackground = styled.View`
	width: 100%;
	z-index: 5;
	height: 100%;
	display: ${(props) => (props.visible ? 'flex' : 'none')};
	position: absolute;
	background-color: rgba(0, 0, 0, 0.6);
	justify-content: center;
	align-items: center;
`;

export const AltModalBackground = styled(ModalBackground)`
	align-items: flex-end;
	justify-content: flex-end;
`;

export const ModalImage = styled.Image`
	width: 100%;
	height: 180px;
	border-radius: 10px;
`;
