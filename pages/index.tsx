import { GetStaticProps } from 'next'

import Hero from '@/components/hero'
import { getRecentBlogPosts } from '@/utils/get-blog-posts'
import { BlogPost } from '@/types/blog-post'
import BlogpostsSection from '@/components/blogposts-section'

type Props = {
  posts: BlogPost[]
}

const IndexPage = ({ posts }: Props) => {
  return (
    <>
      <Hero />
      <BlogpostsSection posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getRecentBlogPosts(3)

  const props: Props = {
    posts,
  }

  return {
    props,
  }
}

export default IndexPage
