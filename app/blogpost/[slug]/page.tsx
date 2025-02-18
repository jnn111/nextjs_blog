import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import matter from 'gray-matter'
import fs from 'fs'
import Onthispage from '@/components/Onthispage'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypePrettyCode } from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
export default async function BlogPage({
  params
}: {
  params: { slug: string }
}) {
  const procesor = unified()
    // Take Markdown as input and turn it into MD syntax tree
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: 'material-theme-ocean',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3000
        })
      ]
    })
    .use(rehypeAutolinkHeadings)

  const filePath = `content/${params.slug}.md`
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const htmlContent = (await procesor.process(content)).toString()
  return (
    <MaxWidthWrapper className="prose dark:prose-invert">
      <div className="flex">
        <div className="px-16">
          <h1>{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
          {params.slug}
        </div>
        <Onthispage
          htmlContent={htmlContent}
          className="text-sm w-[50%]"
        ></Onthispage>
      </div>
    </MaxWidthWrapper>
  )
}
