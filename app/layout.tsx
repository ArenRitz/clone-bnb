import './globals.css';
import { Inter } from 'next/font/google';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Clonebnb',
	description: 'Air BnB clone',
};

const font = Nunito({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={font.className}>
        <Navbar />
        {children}
        </body>
		</html>
	);
}
