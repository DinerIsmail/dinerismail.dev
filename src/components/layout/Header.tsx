import { Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

import Nav from '../nav';

const Header = () => {
	return (
		<Flex
			as="header"
			width="full"
			align="center"
			justifyContent="space-between"
		>
			<Heading as="h1" size="md">
				<Link href="/">Diner Ismail</Link>
			</Heading>
			<Nav />
		</Flex>
	);
};

export default Header;
