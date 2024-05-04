import ConvertKitForm from 'convertkit-react/bin/convertkit-react.esm'
import { Box, Text } from '@chakra-ui/react'

const SignupForm = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      gap="5rem"
      backgroundColor="#E2E8F0"
      borderRadius="16px"
      padding="1rem"
    >
      <Text mb="-3rem" style={{ color: '#171923' }}>
        My goal is to create helpful content for software engineers. Consider
        subscribing to my newsletter to get the latest stuff 🚀
      </Text>
      <ConvertKitForm formId={6521606} className="ck" />
    </Box>
  )
}

export default SignupForm
