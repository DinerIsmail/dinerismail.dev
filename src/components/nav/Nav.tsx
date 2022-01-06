import { Stack, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

import ThemeToggle from '../layout/ThemeToggle';

function Nav() {
	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<Stack direction="row" spacing={6} alignItems="center">
			<Link href="/about">About</Link>
			<Link href="/projects">Projects</Link>
			{/* <Link href="/about">Blog</Link> */}
			{!isMobile && <ThemeToggle />}
		</Stack>
	);
}

export default Nav;
