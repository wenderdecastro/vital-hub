import styled from 'styled-components/native';

export const ModalContainer = styled.View`
	display: ${(props) => (props.visible ? 'flex' : 'none')};
	background-color: #fff;
	width: 90%;
	height: 60%;
	z-index: 10;
	border-radius: 15px;
	padding: 40px 30px;
	justify-content: space-between;
	align-items: center;
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

export const ModalImage = styled.Image`
	width: 100%;
	height: 180px;
	border-radius: 10px;
`;
