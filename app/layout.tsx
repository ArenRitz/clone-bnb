import './globals.css';
import { Inter } from 'next/font/google';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modal/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modal/LoginModal';
import getCurrentUser from './actions/getCurrentUser';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Clonebnb',
	description: 'Air BnB clone',
};

const font = Nunito({ subsets: ['latin'] });

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	const currentUser = await getCurrentUser();

	return (
		<html lang='en'>
			<body className={font.className}>
				<ClientOnly>
					<ToasterProvider />
					<RegisterModal/>
					<LoginModal/>
					<Navbar currentUser={currentUser}/>
				</ClientOnly>
				{children}
			</body>
		</html>
	);
}
