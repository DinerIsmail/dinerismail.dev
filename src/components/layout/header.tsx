import { HStack, Heading, Link, Container, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'

const Header = () => {
  return (
    <HStack
      as="nav"
      position="sticky"
      zIndex="popover"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      mt="1rem"
      mb="4rem"
      py="0.75rem"
      bg="white"
      _dark={{
        bg: 'gray.800',
      }}
      insetX={0}
      transitionDuration="normal"
      transitionProperty="background"
    >
      <Container
        alignItems="center"
        justifyContent="space-between"
        display={{ sm: 'flex-wrap', md: 'flex' }}
        maxW="container.md"
        px={{ base: 4, lg: 0 }}
      >
        <Heading size="md" mb="0.5rem">
          <Link
            as={NextLink}
            href="/"
            className="header-link"
            fontSize="1.5rem"
          >
            Diner Ismail
          </Link>
        </Heading>
        <Stack direction="row" gap="2rem">
          <Link
            as={NextLink}
            href="/blog"
            className="header-link"
            fontSize="1.5rem"
            fontWeight="700"
          >
            Blog
          </Link>
          <Link
            as={NextLink}
            href="/bookmarks"
            className="header-link"
            fontSize="1.5rem"
            fontWeight="700"
          >
            Bookmarks
          </Link>
        </Stack>
      </Container>
    </HStack>
  )
}

export default Header
