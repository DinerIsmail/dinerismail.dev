import { VStack, Heading, Text } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <VStack w="full" spacing={12}>
      <VStack w="full" spacing={4}>
        <Heading>Say what? 🤨</Heading>
        <Text>I&apos;m afraid this page doesn&apos;t exist.</Text>
      </VStack>
    </VStack>
  )
}

export default NotFound
