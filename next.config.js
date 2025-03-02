const moduleExports = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com'
      },
      {
        protocol: 'https',
        hostname: 'opengraph.githubassets.com'
      },
    ]
  },
  redirects() {
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
