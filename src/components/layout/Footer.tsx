import { Flex, Text, IconButton, HStack, Link } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
	return (
		<Flex as="footer" width="full" align="center" justify="space-between">
			<Text>{new Date().getFullYear()} - dinerismail.dev</Text>
			<HStack>
				<Link href="https://github.com/dinerismail" isExternal>
					<IconButton
						variant="ghost"
						aria-label="Github link"
						icon={<AiFillGithub />}
					/>
				</Link>
				<Link href="https://twitter.com/dinerismail" isExternal>
					<IconButton
						variant="ghost"
						aria-label="Twitter link"
						icon={<AiOutlineTwitter />}
					/>
				</Link>
			</HStack>
		</Flex>
	);
};

export default Footer;
