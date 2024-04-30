import ConvertKitForm from 'convertkit-react/bin/convertkit-react.esm'
import { Text } from '@chakra-ui/react'

const SignupForm = () => {
  return (
    <>
      <Text mb="-3rem">
        My goal is to create helpful content for software engineers. Consider
        subscribing to my newsletter to get the latest stuff 🚀
      </Text>
      <ConvertKitForm formId={6521606} className="ck" />
    </>
  )
}

export default SignupForm
