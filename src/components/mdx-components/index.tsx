import {
  Alert,
  Box,
  chakra,
  Kbd,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import Highlight, { defaultProps } from 'prism-react-renderer'
import darkTheme from 'prism-react-renderer/themes/nightOwl'
import lightTheme from 'prism-react-renderer/themes/nightOwlLight'
import { useId } from 'react'

const ChakraHighlight = chakra(Highlight, {
  shouldForwardProp: (prop) =>
    ['Prism', 'theme', 'code', 'language', 'children'].includes(prop),
})

const Pre = (props) => (
  <chakra.div
    my="2em"
    borderRadius="sm"
    fontSize="1.1875rem"
    fontFamily="monospace"
    {...props}
  />
)

const Table = (props) => (
  <chakra.div overflowX="auto">
    <chakra.table textAlign="left" mt="32px" width="full" {...props} />
  </chakra.div>
)

const THead = (props) => (
  <chakra.th
    bg="gray.50"
    _dark={{
      bg: 'whiteAlpha.100',
    }}
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
)

const TData = (props) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
)

const CodeHighlight = ({ children: codeString, className: language }: any) => {
  const theme = useColorModeValue(lightTheme, darkTheme)
  const codeId = useId()
  if (!language) {
    return (
      <chakra.code
        apply="mdx.code"
        color="purple.500"
        _dark={{
          color: 'purple.200',
          bg: 'purple.900',
        }}
        bg="purple.50"
        px={1}
        py={0.5}
        rounded={{ base: 'none', md: 'md' }}
      >
        {codeString}
      </chakra.code>
    )
  }
  language = language.replace('language-', '')
  const showLineNumbers = false // !['shell', 'text'].includes(language)

  return (
    <ChakraHighlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        tokens.pop()
        return (
          <div data-language={className}>
            <chakra.pre
              className={className}
              sx={{ ...style, backgroundColor: 'gray.50' }}
              _dark={{
                backgroundColor: 'gray.900',
              }}
              overflowX="auto"
              rounded="md"
              p={4}
              mx={-4}
            >
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })
                return (
                  <chakra.div
                    {...lineProps}
                    display="table-row"
                    key={`${codeId}.${i}`}
                  >
                    {showLineNumbers && (
                      <chakra.span
                        key={`${codeId}.${i}.number`}
                        w={8}
                        display="table-cell"
                        textAlign="right"
                        userSelect="none"
                        color="blackAlpha.500"
                        pr={3}
                        _dark={{
                          color: 'whiteAlpha.500',
                        }}
                      >
                        {i + 1}
                      </chakra.span>
                    )}
                    {line.map((token, key) => {
                      return (
                        <chakra.span
                          {...getTokenProps({ token, key })}
                          key={`${codeId}.${i}.${key}`}
                        />
                      )
                    })}
                  </chakra.div>
                )
              })}
            </chakra.pre>
          </div>
        )
      }}
    </ChakraHighlight>
  )
}

const Image = (props) => {
  return (
    <NextImage {...props} layout="responsive" loading="lazy" quality={100} />
  )
}

const Anchor = (props) => (
  <chakra.a color="purple.500" _dark={{ color: 'purple.300' }} {...props} />
)

const MDXComponents = {
  code: CodeHighlight,
  h1: (props) => <Heading as="h1" apply="mdx.h1" {...props} />,
  h2: (props) => (
    <Heading
      as="h2"
      apply="mdx.h2"
      fontSize="2.3125rem"
      marginTop="3.125rem"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      as="h3"
      apply="mdx.h3"
      fontSize="1.5rem"
      marginTop="2rem"
      {...props}
    />
  ),
  h4: (props) => <Heading as="h4" apply="mdx.h4" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  pre: Pre,
  kbd: Kbd,
  img: Image,
  br: (props) => <Box as={'br'} h={undefined} {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: Anchor,
  p: (props) => (
    <chakra.p
      apply="mdx.p"
      fontSize="1.3125rem"
      marginTop="0.75rem"
      {...props}
    />
  ),
  ul: (props) => (
    <chakra.ul
      px={{ base: 4, md: 0 }}
      apply="mdx.ul"
      marginTop="1.5rem"
      style={{ paddingInlineStart: '1.25rem' }}
      {...props}
    />
  ),
  ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props) => <chakra.li fontSize="1.3125rem" {...props} />,
  blockquote: (props) => (
    <Box>
      <Alert
        as="blockquote"
        role="none"
        rounded="4px"
        status="warning"
        variant="left-accent"
        {...props}
        w="unset"
        mx={-4}
      />
    </Box>
  ),
}

export default MDXComponents
