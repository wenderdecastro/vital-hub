import React, { useState } from 'react';
import { Container } from '../../components/Container';
import { Title } from '../../components/Title/style';
import { ClinicCard } from '../../components/Card';
import { CardList } from '../../components/Card/style';
import { Spacing } from '../../utils/Components';
import { ContainerBox } from '../../components/Container/style';
import { Link } from '../../components/Link/style';
import { Button } from '../../components/Buttons';

export const SelectClinicScreen = () => {
	const [clinicList, setClinicList] = useState([
		{
			ClinicId: 1,
			ClinicName: 'biriguilhos',
			ClinicCity: 'pediatra',
			ClinicState: 'SP',
			ClinicSchedule: 'Seg-Sex',
			ClinicRating: '4,5',
		},
		{
			ClinicId: 2,
			ClinicName: 'hospital fuderj',
			ClinicCity: 'Rio de janeiro',
			ClinicState: 'RJ',
			ClinicSchedule: 'Dom-Dom',
			ClinicRating: '1.0',
		},
		{
			ClinicId: 3,
			ClinicName: 'dango balango',
			ClinicCity: 'salamangotango',
			ClinicState: 'AL',
			ClinicSchedule: 'Seg-Sex',
			ClinicRating: '5.0',
		},
	]);

	return (
		<Container>
			<Spacing size={60} />
			<Title>Selecionar Clínica</Title>
			<CardList
				data={clinicList}
				key={(item) => item.id}
				renderItem={({ item }) => (
					<ClinicCard
						ClinicName={item.ClinicName}
						ClinicRating={item.ClinicRating}
						ClinicCity={item.ClinicCity}
						ClinicSchedule={item.ClinicSchedule}
						ClinicState={item.ClinicState}
					/>
				)}
			/>

			<Button title={'Continuar'} />

			<Link>Cancelar</Link>
		</Container>
	);
};
