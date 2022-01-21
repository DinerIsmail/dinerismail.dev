/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
	title: 'Diner Ismail',
	// titleTemplate: '%s | Diner Ismail',
	defaultTitle: 'Diner Ismail',
	description:
		'Full stack developer working on projects that make the world a better place',
	canonical: 'https://dinerismail.dev',
	openGraph: {
		url: 'https://dinerismail.dev',
		title: 'dinerismail.dev',
		description:
			'Full stack developer working on projects that make the world a better place',
		images: [
			// {
			// 	url: 'https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
			// 	alt: 'nextarter-chakra.sznm.dev og-image',
			// },
		],
		site_name: 'dinerismail.dev',
	},
	twitter: {
		handle: '@dinerismail',
		cardType: 'summary_large_image',
	},
};

export default defaultSEOConfig;
