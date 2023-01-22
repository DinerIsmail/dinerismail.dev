const moduleExports = {
  swcMinify: true,
  images: {
    domains: ['img.youtube.com', 'opengraph.githubassets.com'],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/qCPwSQdtPu',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/DinerIsmail',
        permanent: true,
      },
    ]
  },
}

module.exports = moduleExports
