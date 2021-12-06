import { Stack } from '@chakra-ui/react';
import Link from 'next/link';

import ThemeToggle from '../layout/ThemeToggle';

function Nav() {
	return (
		<Stack direction="row" spacing={8} alignItems="center">
			<Link href="/about">About me</Link>
			{/* <Link href="/about">Blog</Link> */}
			<ThemeToggle />
		</Stack>
	);
}

export default Nav;
