import {
  HStack,
  Heading,
  IconButton,
  Link,
  Tooltip,
  Container,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { FiCommand } from 'react-icons/fi'

const Header = () => {
  const [shortcut, setShortcut] = useState<string>()

  useEffect(() => {
    setShortcut(
      navigator.userAgent.indexOf('Mac OS X') != -1 ? 'Cmd + K' : 'Ctrl + K',
    )
  }, [setShortcut])

  return (
    <HStack
      as="nav"
      position="sticky"
      zIndex="popover"
      top={0}
      alignItems="center"
      justifyContent="space-between"
      w="full"
      mb={16}
      py={3}
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
        display="flex"
        maxW="container.md"
        px={{ base: 4, lg: 0 }}
      >
        <Heading size="md">
          <Link as={NextLink} href="/">
            Diner Ismail
          </Link>
        </Heading>
      </Container>
    </HStack>
  )
}

export default Header
