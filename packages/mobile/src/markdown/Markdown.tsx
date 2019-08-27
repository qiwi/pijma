import React, {Children, FC} from 'react'
import MarkdownComponent from 'markdown-to-jsx'
import {Paragraph, Heading, Text} from '../typography'
import {Link} from '../link'
import {List} from '../list'
import styled from '@qiwi/pijma-core/styled'
import {Box} from '@qiwi/pijma-core'

export interface MarkdownProps {
  size: 's' | 'm' | 'l'
}

const MarkdownBox = styled(Box)({
  '&:first-child': {marginTop: 0},
})

const SizeMargin: { [size in NonNullable<MarkdownProps['size']>]: number } = {
  s: 3,
  m: 3,
  l: 3,
}

const MarkdownParagraph: FC<MarkdownProps> = ({children, size}) => (
  <MarkdownBox mt={SizeMargin[size]}>
    <Paragraph size={size} children={children}/>
  </MarkdownBox>
)

interface LinkProps {
  title?: string
  href?: string
  size: 's' | 'm' | 'l'
}

const MarkdownLink: FC<LinkProps> = ({title, href, size, children}) => (
  <Link
    title={title}
    href={href}
    size={size}
    children={children}
  />
)

const h1: FC = ({children}) => (
  <MarkdownBox mt={6}>
    <Heading size="1" children={children}/>
  </MarkdownBox>
)

const h2: FC = ({children}) => (
  <MarkdownBox mt={6}>
    <Heading size="2" children={children}/>
  </MarkdownBox>
)

const h3: FC = ({children}) => (
  <MarkdownBox mt={5}>
    <Heading size="3" children={children}/>
  </MarkdownBox>
)

const h4: FC = ({children}) => (
  <MarkdownBox mt={4}>
    <Heading size="4" children={children}/>
  </MarkdownBox>
)

const Strong: FC<MarkdownProps> = ({size, children}) => (
  <Text bold size={size} children={children}/>
)

const MarkdownLi: FC<MarkdownProps> = ({size, children}) => (
  <React.Fragment>
    {React.Children.map(children, (child, i) => (
      <MarkdownBox mt={SizeMargin[size]}>
        {typeof child === 'string' ? (
          <Paragraph key={i} size={size} children={child}/>
        ) : (
          child
        )}
      </MarkdownBox>
    ))}
  </React.Fragment>
)

const ul: FC<MarkdownProps> = ({size, children}) => (
  <MarkdownBox mt={SizeMargin[size]}>
    <List type="bullet" children={Children.toArray(children)}/>
  </MarkdownBox>
)

const ol: FC<MarkdownProps> = ({size, children}) => (
  <MarkdownBox mt={SizeMargin[size]}>
    <List type="number" children={Children.toArray(children)}/>
  </MarkdownBox>
)

const returnOverrides = (size: 's' | 'm' | 'l'): object => {
  return {
    p: {
      component: MarkdownParagraph,
      props: {
        size,
      },
    },
    a: {
      component: MarkdownLink,
      props: {
        size,
      },
    },
    li: {
      component: MarkdownLi,
      props: {
        size,
      },
    },
    ul: {
      component: ul,
      props: {
        size,
      },
    },
    ol: {
      component: ol,
      props: {
        size,
      },
    },
    strong: {
      component: Strong,
      props: {
        size,
      },
    },
  }
}

const overrides = {
  's': returnOverrides('s'),
  'm': returnOverrides('m'),
  'l': returnOverrides('l'),
}

export const Markdown: FC<MarkdownProps> = ({size, children}) => (
  <MarkdownComponent
    children={children}
    options={{
      overrides: {
        ...(overrides[size]),
        h1,
        h2,
        h3,
        h4,
      },
    }}
  />
)
