import { Link, LinkProps, useColorModeValue as mode } from '@chakra-ui/react'

const ExternalLink = ({ children, ...linkProps }: LinkProps) => {
  return (
    <span>
      <Link
        {...linkProps}
        alignItems="center"
        display="inline-flex"
        color={mode('purple.500', 'purple.300')}
        isExternal
        target="_blank"
      >
        {children}
      </Link>
    </span>
  )
}

export default ExternalLink
