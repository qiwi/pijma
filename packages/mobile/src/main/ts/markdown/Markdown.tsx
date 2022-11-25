import { Box, Image, MarkdownToJSX, styled } from '@qiwi/pijma-core'
import React, { Children, FC, Fragment, ReactNode } from 'react'

import { Link } from '../link'
import { List } from '../list'
import { Heading, Paragraph, Text } from '../typography'

export interface MarkdownProps {
  size?: 's' | 'm' | 'l'
  children: string
}

const MarkdownBox = styled(Box)({
  '&:nth-child(1)': {
    marginTop: 0,
  },
})

MarkdownBox.displayName = 'MarkdownBox'

const SizeMargin: { [size in NonNullable<SizeProps['size']>]: number } = {
  s: 2,
  m: 3,
  l: 3,
}

interface SizeProps {
  size: 's' | 'm' | 'l'
  children?: ReactNode
}

const p: FC<SizeProps> = ({ children, size }) => (
  <MarkdownBox mt={SizeMargin[size]}>
    <Paragraph size={size} children={children} />
  </MarkdownBox>
)

p.displayName = 'p'

interface ImageProps extends SizeProps {
  alt?: string
  src: string
}

const img: FC<ImageProps> = ({ src, alt }) => (
  <Image src={src} alt={alt} width="auto" height="auto" />
)

img.displayName = 'img'

interface LinkProps extends SizeProps {
  title?: string
  href?: string
}

const a: FC<LinkProps> = ({ title, href, size, children }) => (
  <Link title={title} href={href} size={size} children={children} />
)

a.displayName = 'a'

const h1: FC<SizeProps> = ({ children }) => (
  <MarkdownBox mt={6}>
    <Heading size="1" children={children} />
  </MarkdownBox>
)

h1.displayName = 'h1'

const h2: FC<SizeProps> = ({ children }) => (
  <MarkdownBox mt={6}>
    <Heading size="2" children={children} />
  </MarkdownBox>
)

h2.displayName = 'h2'

const h3: FC<SizeProps> = ({ children }) => (
  <MarkdownBox mt={5}>
    <Heading size="3" children={children} />
  </MarkdownBox>
)

h3.displayName = 'h3'

const h4: FC<SizeProps> = ({ children }) => (
  <MarkdownBox mt={4}>
    <Heading size="4" children={children} />
  </MarkdownBox>
)

h4.displayName = 'h4'

const strong: FC<SizeProps> = ({ children }) => (
  <Text bold children={children} />
)

strong.displayName = 'strong'

const del: FC<SizeProps> = ({ children }) => (
  <Text decoration="line-through" children={children} />
)

del.displayName = 'del'

const li: FC<SizeProps> = ({ size, children }) => (
  <Fragment>
    {Children.map(children, (child, i) => (
      <MarkdownBox key={i} mt={SizeMargin[size]}>
        {typeof child === 'string' ? (
          <Paragraph key={i} size={size} children={child} />
        ) : (
          child
        )}
      </MarkdownBox>
    ))}
  </Fragment>
)

li.displayName = 'li'

const ul: FC<SizeProps> = ({ size, children }) => (
  <MarkdownBox mt={SizeMargin[size]}>
    <List size={size} type="bullet" children={Children.toArray(children)} />
  </MarkdownBox>
)

ul.displayName = 'ul'

interface NumericListProps extends SizeProps {
  start: number
}

const ol: FC<NumericListProps> = ({ size, start, children }) => (
  <MarkdownBox mt={SizeMargin[size]}>
    <List
      size={size}
      type={start < 1000 ? 'number' : 'step'}
      children={Children.toArray(children)}
    />
  </MarkdownBox>
)

ol.displayName = 'ol'

const overrides: { [tag: string]: FC<any> } = {
  p,
  h1,
  h2,
  h3,
  h4,
  a,
  ul,
  ol,
  li,
  strong,
  del,
  img,
}

export const Markdown: FC<MarkdownProps> = ({ size = 'm', children }) => (
  <MarkdownToJSX
    children={children}
    options={{
      overrides: Object.fromEntries(Object.keys(overrides).map(
        ( tag) => [tag, {
              component: overrides[tag],
              props: {
                size,
              },
            }],
      )),
    }}
  />
)

Markdown.displayName = 'Markdown'
