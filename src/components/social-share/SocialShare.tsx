import { Box, Text, Icon, Link, HStack } from '@chakra-ui/react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const SocialShare = ({ url, description }) => {
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${description}" - by @DinerIsmail\n`)}&url=${url}`
  const linkedinLink = `https://linkedin.com/sharing/share-offsite/?url=${url}`

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      width="100%"
      borderTop="1px solid #CBD5E0"
      paddingTop="2rem"
    >
      <Text mr="0.5rem">Liked this post? Thanks! Let the world know:</Text>
      <HStack>
        <Link
          href={twitterLink}
          target="_blank"
          display="flex"
          alignItems="center"
        >
          <Icon
            aria-label="Share on Twitter"
            as={FaTwitter}
            cursor="pointer"
            w="1.5rem"
            h="1.5rem"
            transition="color 150ms"
            _hover={{ color: 'gray.400' }}
          />
        </Link>
        <Link
          href={linkedinLink}
          target="_blank"
          display="flex"
          alignItems="center"
        >
          <Icon
            aria-label="Share on LinkedIn"
            as={FaLinkedin}
            cursor="pointer"
            w="1.5rem"
            h="1.5rem"
            transition="color 150ms"
            _hover={{ color: 'gray.400' }}
          />
        </Link>
      </HStack>
    </Box>
  )
}

export default SocialShare
