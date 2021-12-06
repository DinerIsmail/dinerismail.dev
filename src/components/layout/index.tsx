import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.scss';

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<Box
			className={styles.root}
			margin="0 auto"
			maxWidth={800}
			transition="0.5s ease-out"
		>
			<Box margin="8">
				<Header />
				<Box as="main" marginY={22}>
					{children}
				</Box>
				<Footer />
			</Box>
		</Box>
	);
};

export default Layout;
