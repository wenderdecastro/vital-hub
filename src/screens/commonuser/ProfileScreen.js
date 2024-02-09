import { SafeAreaView, View } from 'react-native';
import { Container } from '../../components/Container';
import { FloatingSection } from '../../components/Misc/FloatingSection';
import { Picture } from '../../components/Picture';
import { PictureImage } from '../../components/Picture/style';

export const ProfileScreen = () => {
	return (
		<SafeAreaView style={{ alignItems: 'center' }}>
			<PictureImage
				resizeMode="cover"
				// style={{ position: 'relative', zIndex: -1 }}
				source={require('../../assets/testprofilepic.png')}
			/>
			<FloatingSection
				useremail={'emailusuario@exemplo.com'}
				username={'nome usuario'}
			/>
			<View style={{ flex: 4 }}></View>
		</SafeAreaView>
	);
};
