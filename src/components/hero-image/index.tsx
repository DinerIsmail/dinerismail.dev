import { Box, AspectRatio, Flex } from '@chakra-ui/react'

import Image from '@/components/image'

const HeroImage = () => {
  return (
    <Flex position="relative" justify="center" pb={4}>
      <AspectRatio as="figure" flexShrink={0} w={56} h={56} ratio={1}>
        <Box overflow="hidden" rounded="full">
          <Image
            alt="A photo of Diner Ismail"
            src="/assets/images/diner.jpg"
            width={224}
            height={224}
            objectFit="contain"
          />
        </Box>
      </AspectRatio>
    </Flex>
  )
}

export default HeroImage
