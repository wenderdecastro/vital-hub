import React, { useState } from 'react';
import { Container } from '../../components/Container';
import { Title } from '../../components/Title/style';
import { DoctorCard } from '../../components/Card';
import { CardList } from '../../components/Card/style';
import { Spacing } from '../../utils/Components';
import { ContainerBox } from '../../components/Container/style';
import { Link } from '../../components/Link/style';
import { Button } from '../../components/Buttons';

export const SelectMedicScreen = () => {
	const [DoctorList, setDoctorList] = useState([
		{
			doctorId: 1,
			doctorName: 'biriguilhos',
			doctorSpeciality: 'pediatra',
			isDoctorAvaliable: true,
		},
		{
			doctorId: 2,
			doctorName: 'berengudengo',
			doctorSpeciality: 'pediatra',
			isDoctorAvaliable: true,
		},
		{
			doctorId: 3,
			doctorName: 'dango balango',
			doctorSpeciality: 'salamangotango',
			isDoctorAvaliable: true,
		},
	]);

	const [listView, setListView] = useState(true);
	return (
		<Container>
			<Spacing size={60} />
			<Title>Selecionar Médico</Title>
			<CardList
				data={DoctorList}
				key={(item) => item.id}
				renderItem={({ item }) =>
					listView == item.isDoctorAvaliable && (
						<DoctorCard
							doctorName={item.doctorName}
							doctorSpeciality={item.doctorSpeciality}
						/>
					)
				}
			/>

			<Button title={'Continuar'} />

			<Link>Cancelar</Link>
		</Container>
	);
};
