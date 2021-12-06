import { Flex, Heading, Text } from '@chakra-ui/react';

const Home = () => {
	return (
		<Flex
			direction="column"
			justifyContent="center"
			mb={8}
			w="full"
			h="calc(100vh - 204px)"
		>
			<Heading>Hello, I'm Diner</Heading>
			<Text mt={4} fontSize="xl" maxW="500px">
				I'm a web developer working on projects that make the world a
				better place.
			</Text>
		</Flex>
	);
};

export default Home;
