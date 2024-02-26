import React, { useState } from 'react';
import { Container } from '../../components/Container';
import { Title } from '../../components/Title/style';
import { DoctorCard } from '../../components/Card';
import { CardList } from '../../components/Card/style';
import { Spacing } from '../../utils/Components';
import { ContainerBox } from '../../components/Container/style';

export const SelectMedicScreen = () => {
	const [DoctorList, setDoctorList] = useState([
		{
			doctorName: 'biriguilhos',
			doctorSpeciality: 'pediatra',
			isDoctorAvaliable: true,
		},
		{
			doctorName: 'berengudengo',
			doctorSpeciality: 'pediatra',
			isDoctorAvaliable: true,
		},
		{
			doctorName: 'dango balango',
			doctorSpeciality: 'salamangotango',
			isDoctorAvaliable: true,
		},
	]);

	const [listView, setListView] = useState(true);
	return (
		<ContainerBox>
			<Spacing size={60} />
			<Title>Selecionar Médico</Title>
			<CardList
				data={DoctorList}
				key={(item) => item.id}
				renderItem={({ item }) =>
					listView == item.isDoctorAvaliable && <DoctorCard />
				}
			/>
		</ContainerBox>
	);
};
