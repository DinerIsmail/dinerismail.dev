import { memo } from 'react';
import { GraphQLClient } from 'graphql-request';
import { Grid, useBreakpointValue, Flex } from '@chakra-ui/react';
import Card from '../components/projects/card';

interface IProject {
	title: string;
	slug: string;
	excerpt: string;
	image: {
		url: string;
	};
	content: string;
}

const Projects = ({ projects }: { projects: IProject[] }) => {
	return (
		<Flex direction="column" mb={8} mt={12}>
			<Grid
				templateColumns={useBreakpointValue({
					base: 'repeat(1, 1fr)',
					md: 'repeat(2, 1fr)',
				})}
				gap={useBreakpointValue({ base: 8, md: 16 })}
			>
				{projects.map((project) => (
					<Card
						key={project.title}
						excerpt={project.excerpt}
						title={project.title}
						imageUrl={project.image.url}
						slug={project.slug}
					/>
				))}
			</Grid>
		</Flex>
	);
};

export async function getStaticProps() {
	const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL || '');

	const { projects } = await graphcms.request(`
	{
		projects(orderBy: date_DESC) {
			slug
			title
			date
			excerpt
			image {
				url
			}
		}
	}`);

	return {
		props: {
			projects,
		},
		revalidate: 10,
	};
}

export default memo(Projects);
