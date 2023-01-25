const moduleExports = {
  swcMinify: true,
  images: {
    domains: ['img.youtube.com', 'opengraph.githubassets.com'],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/dinerismail',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/dinerismail',
        permanent: true,
      },
    ]
  },
}

module.exports = moduleExports
