import styled from "styled-components/native";
import { Colors } from "../../utils/Colors";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: Colors.primary_v1
})`
border-radius: 5px;
border: 2px ${Colors.primary};
width: 100%;
height: 7%;
color: ${Colors.primary_v1};
font-size:16px;
font-family: "MontserratAlternates_600SemiBold";
padding: 15px;
margin-top: 15px;


`