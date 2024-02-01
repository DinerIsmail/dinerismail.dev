import Image from 'next/image'
import { chakra, Stack, HStack, VStack, Divider, Text } from '@chakra-ui/react'

import VercelCallout from '../vercel-callout'

const Footer = () => {
  return (
    <VStack as="footer" alignItems="flex-start" pb={8} spacing={8}>
      <HStack>
        <a href="https://www.codementor.io/@dinerismail?refer=badge">
          <Image
            src="https://www.codementor.io/m-badges/dinerismail/find-me-on-cm-g.svg"
            alt="Codementor badge"
            height="100"
            width="150"
            style={{
              borderRadius: '10px',
            }}
          />
        </a>
        <a href="https://www.buymeacoffee.com/diner">
          <Image
            src="/assets/buymeacoffee.png"
            alt="Buy me a Coffee"
            height="100"
            width="200"
          />
        </a>
      </HStack>
      <Divider />
      <Stack
        alignItems="center"
        justifyContent={{ base: 'center', md: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
        gridRowGap={4}
        w="full"
        spacing={0}
      >
        <Text color="gray.500" fontSize="sm">
          © <chakra.span as="time">{new Date().getFullYear()}</chakra.span>{' '}
          Diner Ismail
        </Text>
        <VercelCallout />
      </Stack>
    </VStack>
  )
}

export default Footer
