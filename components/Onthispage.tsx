'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
interface LinkType {
  id: string
  text: string
}
function Onthispage({
  htmlContent,
  className
}: {
  hemlContent: string
  className: string
}) {
  const [links, setLinks] = useState<null | LinkType[]>(null)
  useEffect(() => {
    const temp = document.createElement('div')
    temp.innerHTML = htmlContent

    const headings = temp.querySelectorAll('h2')

    const generatedLinks: LinkType[] = []
    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`
      heading.id = id

      generatedLinks.push({
        id: id,
        text: (heading as HTMLElement).innerText
      })
    })
    console.log('generatedLinks', generatedLinks)
    setLinks(generatedLinks)
  }, [htmlContent])
  return (
    <div className={cn('hidden md:block', className)}>
      <div className="sticky top-6">
        <h2>On this page</h2>
        <ul className="not-prose text-xs">
          {links &&
            links.map((link) => {
              return (
                <li key={link.id} className="pt-1">
                  <a href={`#${link.id}`}>
                    {link.text.slice(0, 50)}
                    {link.text.length > 50 ? '...' : ''}
                  </a>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default Onthispage
