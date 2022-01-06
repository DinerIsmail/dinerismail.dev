import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { GraphQLClient } from 'graphql-request';
import { Box, Heading, Flex, useBreakpointValue } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { NextSeo } from 'next-seo';

// import LayoutContainer from '@components/layout-container';
// import styles from './post.module.scss';

const Project = ({ project }) => {
	const router = useRouter();

	console.log(project);

	const boxBreakpointValue = useBreakpointValue({ base: '90%', md: '650px' });

	if (router.isFallback) {
		return <h1>Please wait…</h1>;
	}

	if (!project?.content || project.notFound) {
		return (
			<>
				<Head>
					<meta name="robots" content="noindex" />
				</Head>
				<Error statusCode={404} />
			</>
		);
	}

	return (
		<>
			<NextSeo
				title={`${project.title} | Diner Ismail`}
				description={project.excerpt}
				openGraph={{
					title: `${project.title} | Diner Ismail`,
					description: project.excerpt,
					images: [{ url: project.image?.url }],
					type: 'article',
				}}
			/>

			<Flex direction="column" mb={8} mt={12}>
				<Flex flexDirection="column" alignItems="center" py={6}>
					<Box maxWidth={boxBreakpointValue} w="full">
						<Box h={'350px'} bg={'gray.100'} mb={6} pos={'relative'}>
							<Image
								alt="Project cover image"
								src={project.image?.url}
								layout="fill"
								objectFit="cover"
							/>
						</Box>
						<Heading mb={8}>{project.title}</Heading>
						<ReactMarkdown>{project.content?.markdown}</ReactMarkdown>
					</Box>
				</Flex>
			</Flex>
		</>
	);
};

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL || '');

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { project } = await graphcms.request(
			`
			query ProjectQuery($slug: String!){
				project(where: {slug: $slug}) {
					title
					date
					excerpt
					slug
					content {
						markdown
					}
					image {
						url
					}
				}
			}`,
			{
				slug: params?.project,
			},
		);

		return {
			props: {
				project,
			},
			revalidate: 5,
		};
	} catch (error) {
		console.error('Something went wrong', error);
		return { props: { project: { notFound: true } } };
	}
};

export async function getStaticPaths() {
	const { projects } = await graphcms.request(`{
	projects {
		slug
		title
		}
	}`);

	const paths = projects.map(({ project }) => `/project/${project}`);

	return {
		paths,
		fallback: true,
	};
}

export default Project;
