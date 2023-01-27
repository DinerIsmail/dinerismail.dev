import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { NextSeo } from 'next-seo'
import { format } from 'timeago.js'
import {
  VStack,
  Heading,
  HStack,
  Text,
  Spinner,
  Divider,
} from '@chakra-ui/react'

import { BlogPost } from '@/types/blog-post'
import { getBlogPosts } from '@/utils/get-blog-posts'
import { readBlogPost } from '@/utils/read-blog-post'
import MDXComponents from '@/components/mdx-components'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import imageMetadata from '@/utils/plugins/image-metadata'
import ScrollToTopButton from '@/components/scroll-to-top-button'

type Props = BlogPost & {
  source: MDXRemoteSerializeResult
}

const BlogPostPage = ({
  title,
  description,
  date,
  source,
  readingTime,
}: Props) => {
  const { query } = useRouter()
  const slug = query.slug as string

  return (
    <>
      <NextSeo
        title={`${title} - Diner Ismail`}
        description={description}
        openGraph={{
          description,
          title: `${title} - Diner Ismail`,
          url: `https://dinerismail.dev/blog/${slug}`,
          // images: [
          //   {
          //     url: `https://res.cloudinary.com/nikolovlazar/image/upload/${encodeURIComponent(
          //       `g_north_west,l_text:calsans-semibold.ttf_72:Lazar%20Nikolov,g_north_west,x_20,y_20,co_#EDF2F7,x_330,y_208,x_330,y_208/c_fit,g_north_west,l_c_fit,g_north_west,l_text:calsans-semibold.ttf_48:${title},g_north_west,x_20,y_20,co_#718096,w_771,x_330,y_306,w_771,x_330,y_306`,
          //     )}/blog-post-image-template_scisgq.png`,
          //   },
          // ],
        }}
      />
      <VStack position="relative" alignItems="stretch" w="full" spacing={8}>
        <VStack alignItems="flex-start" spacing={3}>
          <Heading as="h1" size="lg">
            {title}
          </Heading>
          <HStack
            divider={
              <Text mx={2} color="gray.500">
                •
              </Text>
            }
          >
            <Text color="gray.500" fontSize="sm">
              {format(date)}
            </Text>

            <Text color="gray.500" fontSize="sm">
              {readingTime}
            </Text>
          </HStack>
        </VStack>
        <MDXRemote {...source} components={MDXComponents} />
      </VStack>
      <ScrollToTopButton />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPosts()

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params.slug as string

  const postContent = await readBlogPost(slug)
  const {
    content,
    data: { title, description, date },
  } = matter(postContent)

  return {
    props: {
      source: await serialize(content, {
        mdxOptions: {
          rehypePlugins: [imageMetadata],
        },
      }),
      readingTime: readingTime(content).text,
      title,
      description,
      date,
      slug,
    },
  }
}

export default BlogPostPage
