import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../utils/Colors';
import {
	Card,
	CardContent,
	CardContentBox,
	CardTextBox,
	GreenBox,
	ProfileImage,
} from './style';
import { Entypo } from '@expo/vector-icons';
import { Box, CardRow, Row, RowBox } from '../Container/style';
import { AltText, Label, ThinText } from '../Text/style';
import { AltLink } from '../Link/style';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Spacing } from '../../utils/Components';
import { useState } from 'react';

export const AppointmentCard = ({
	patientAge,
	appointmentPriority,
	patientName,
	appointmentTime,
	profile,
	navigation,
	appointmentStatus,
	cancelFn,
	viewMedicalRecordsFn,
	cardClickFn,
}) => {
	return (
		<Card>
			<TouchableOpacity
				onPress={
					appointmentStatus === 'Pendente'
						? cardClickFn
						: null
				}
			>
				<CardContent>
					<ProfileImage
						source={{
							uri: 'https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/quiz-result-image/unknown/0054d5b79fbebc88f6b032788be67a87.jpg',
						}}
					/>
					<Box>
						<CardTextBox>
							<AltText fontSize={20}>
								{patientName}
							</AltText>
							<Spacing size={5} />
							<RowBox>
								<ThinText
									fontSize={
										18
									}
									style={{
										alignSelf: 'flex-start',
									}}
								>
									{
										patientAge
									}
								</ThinText>
								<Entypo
									name="dot-single"
									size={
										24
									}
									color={
										Colors.gray_v6
									}
									style={{
										marginTop: -10,
									}}
								/>
								<Label
									style={{
										marginTop: 0,
									}}
									fontSize={
										18
									}
									textColor={
										Colors.gray_v4
									}
								>
									{
										appointmentPriority
									}
								</Label>
							</RowBox>
						</CardTextBox>
						<CardContentBox>
							<GreenBox
								boxColor={
									appointmentStatus ==
									'Pendente'
										? Colors.primary_v4
										: Colors.white_v1
								}
							>
								<Ionicons
									name="time"
									size={
										15
									}
									color={
										appointmentStatus ==
										'Pendente'
											? Colors.primary
											: Colors.gray_v1
									}
								/>
								<Label
									style={{
										marginTop: -4,
									}}
									textColor={
										appointmentStatus ==
										'Pendente'
											? Colors.primary
											: Colors.gray_v1
									}
									fontSize={
										18
									}
								>
									{
										appointmentTime
									}
								</Label>
							</GreenBox>
							{appointmentStatus ==
							'Cancelada' ? (
								<></>
							) : appointmentStatus ==
							  'Pendente' ? (
								<AltLink
									textDecoration={
										'none'
									}
									linkColor={
										Colors.red
									}
									style={{
										alignSelf: 'center',
									}}
									onPress={
										cancelFn
									}
									fontSize={
										18
									}
								>
									Cancelar
								</AltLink>
							) : (
								<AltLink
									textDecoration={
										'none'
									}
									linkColor={
										Colors.secondary_v1
									}
									style={{
										alignSelf: 'center',
									}}
									onPress={
										viewMedicalRecordsFn
									}
									fontSize={
										14
									}
								>
									{profile ==
									'Patient'
										? 'Ver local da consulta'
										: 'Ver Prontuário'}
								</AltLink>
							)}
						</CardContentBox>
					</Box>
				</CardContent>
			</TouchableOpacity>
		</Card>
	);
};

export const DoctorCard = ({
	doctorName,
	doctorSpeciality,
	isDoctorAvaliable,
	cardClickFn,
}) => {
	return (
		<Card>
			<TouchableOpacity onPress={cardClickFn}>
				<CardContent>
					<ProfileImage
						source={{
							uri: 'https://lumiere-a.akamaihd.net/v1/images/dr_strange_2016_002_bcd5d6a3.jpeg',
						}}
					/>
					<Box>
						<CardTextBox>
							<AltText fontSize={18}>
								{doctorName}
							</AltText>
							<Spacing size={10} />
							<ThinText>
								{
									doctorSpeciality
								}
							</ThinText>
						</CardTextBox>
					</Box>
				</CardContent>
			</TouchableOpacity>
		</Card>
	);
};
export const ClinicCard = ({
	ClinicName,
	ClinicCity,
	ClinicState,
	ClinicSchedule,
	ClinicRating,
	cardClickFn,
}) => {
	return (
		<Card>
			<TouchableOpacity onPress={cardClickFn}>
				<CardContent>
					<Box style={{ gap: 10 }}>
						<CardRow>
							<AltText fontSize={18}>
								{ClinicName}
							</AltText>
							<Row>
								<Octicons
									name="star-fill"
									size={
										24
									}
									color={
										Colors.yellow
									}
								/>

								<Label
									textColor={
										Colors.yellow
									}
								>
									{
										ClinicRating
									}
								</Label>
							</Row>
						</CardRow>
						<CardRow>
							<Label
								textColor={
									Colors.gray_v2
								}
								style={{
									alignSelf: 'center',
								}}
								fontSize={16}
							>
								{ClinicCity},{' '}
								{ClinicState}
							</Label>
							<GreenBox
								boxColor={
									Colors.primary_v4
								}
							>
								<MaterialCommunityIcons
									name="calendar"
									size={
										24
									}
									color={
										Colors.primary
									}
								/>
								<Label
									textColor={
										Colors.primary
									}
									fontSize={
										16
									}
								>
									{
										ClinicSchedule
									}
								</Label>
							</GreenBox>
						</CardRow>
					</Box>
				</CardContent>
			</TouchableOpacity>
		</Card>
	);
};
