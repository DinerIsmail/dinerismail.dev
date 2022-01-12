import { Flex, Text, IconButton, HStack, Link } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
	return (
		<Flex as="footer" width="full" align="center" justify="space-between">
			<Text>{new Date().getFullYear()} - dinerismail.dev</Text>
			<HStack>
				<Link href="https://github.com/dinerismail" isExternal>
					<IconButton
						variant="ghost"
						aria-label="Github link"
						fontSize="32px"
						icon={<AiFillGithub />}
					/>
				</Link>
				<Link href="https://twitter.com/dinerismail" isExternal>
					<IconButton
						variant="ghost"
						aria-label="Twitter link"
						fontSize="32px"
						icon={<AiOutlineTwitter />}
					/>
				</Link>
				<Link href="mailto:ismail.diner@gmail.com" isExternal>
					<IconButton
						variant="ghost"
						aria-label="Email link"
						fontSize="32px"
						icon={<MdEmail />}
					/>
				</Link>
			</HStack>
		</Flex>
	);
};

export default Footer;
