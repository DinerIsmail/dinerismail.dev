import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
} from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

import { GITHUB_PROFILE, TWITTER_PROFILE } from 'src/constants'
import { Link as LinkType } from '@/types/link'
import ExternalLink from '../external-link'
import HeroImage from '../hero-image'
import HeroPlay from '../hero-play'

type SocialLink = LinkType & { color?: string }

const socialLinks: SocialLink[] = [
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
  },
  {
    href: TWITTER_PROFILE,
    label: 'Twitter',
    color: 'twitter',
  },
]

const Hero = () => {
  return (
    <Stack
      as="section"
      alignItems="center"
      direction={{ base: 'column-reverse', md: 'row' }}
      w="full"
      spacing={12}
    >
      <VStack alignItems="flex-start" w="full" spacing={3}>
        <Stack
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
          w="full"
          spacing={3}
        >
          <Heading as="h1" size="lg">
            Hi, I’m Diner.
          </Heading>
          <HeroPlay />
        </Stack>
        <Text as="h2" lineHeight="175%">
          I’m a frontend engineer and community tech creator building products
          that make the world a better place. I work at{' '}
          <ExternalLink href="https://olioex.com">Olio</ExternalLink> as a{' '}
          <strong>Senior Software Engineer</strong>, and I’m a{' '}
          <strong>co-founder and developer</strong> of{' '}
          <ExternalLink href="https://resilienceweb.org.uk">
            Resilience Web
          </ExternalLink>
          .
        </Text>
        <Stack direction="row" spacing={3}>
          {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              justifyContent={{ base: 'flex-start', md: 'center' }}
              px={4}
              color={color}
              href={href}
              rightIcon={<Icon as={FiArrowUpRight} />}
              target="_blank"
              variant="ghost"
            >
              {label}
            </Button>
          ))}
        </Stack>
      </VStack>
      <HeroImage />
    </Stack>
  )
}

export default Hero
