import { memo } from 'react';
import NextLink from 'next/link';
import {
	chakra,
	Box,
	Image,
	useColorModeValue,
	useBreakpointValue,
	Link,
} from '@chakra-ui/react';

const Card = ({
	title,
	excerpt,
	imageUrl,
	slug,
}: {
	title: string;
	excerpt: string;
	imageUrl: string;
	slug: string;
}) => {
	return (
		<Link as={NextLink} href={`/project/${slug}`}>
			<Box
				w="xs"
				bg={useColorModeValue('white', 'gray.700')}
				shadow="2xl"
				rounded="lg"
				overflow="hidden"
				mx="auto"
				boxShadow={useBreakpointValue({ base: '2xl', lg: 'xl' })}
				transition="box-shadow 300ms ease-in-out"
				cursor="pointer"
				_hover={{ boxShadow: '2xl' }}
			>
				<Image w="full" h={56} fit="cover" src={imageUrl} alt="avatar" />

				<Box py={5} textAlign="center">
					<Link
						display="block"
						fontSize="2xl"
						color={useColorModeValue('gray.800', 'white')}
						fontWeight="bold"
					>
						{title}
					</Link>
					<chakra.span
						fontSize="sm"
						color={useColorModeValue('gray.700', 'gray.200')}
					>
						{excerpt}
					</chakra.span>
				</Box>
			</Box>
		</Link>
	);
};

export default memo(Card);
