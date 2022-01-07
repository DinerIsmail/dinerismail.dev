import { memo } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { GraphQLClient } from 'graphql-request';
import ReactMarkdown from 'react-markdown';

const About = ({
	page,
}: {
	page: {
		title: string;
		content: { markdown: string };
	};
}) => {
	return (
		<Flex direction="column" mb={8} mt={12}>
			<Heading>{page.title}</Heading>
			<Text mt={4} fontSize="xl">
				<ReactMarkdown className="page-content" linkTarget="_blank">
					{page.content.markdown}
				</ReactMarkdown>
			</Text>
		</Flex>
	);
};

export async function getStaticProps() {
	const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL || '');

	const { page } = await graphcms.request(`
	{
		page(where: {slug: "about"}) {
			content {
				markdown
			}
			title
		}
	}
	`);

	return {
		props: {
			page,
		},
		revalidate: 60,
	};
}

export default memo(About);
