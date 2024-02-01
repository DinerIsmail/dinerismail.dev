import { promises as fs } from 'fs'
import path from 'path'

export const readPage = async (slug: string) => {
  const postPath = path.join(
    process.cwd(),
    './content/pages',
    slug,
    'index.mdx',
  )

  return await fs.readFile(postPath, 'utf8')
}
