import React, { FC, ReactNode } from 'react'

import { Spacer } from '@qiwi/pijma-core'

// @ts-ignore
import SectionHeading from 'rsg-components/SectionHeading'

// @ts-ignore
// import Markdown from 'rsg-components/Markdown'

interface SectionRendererProps {
  name: string
  description: string
  slug: string
  content: ReactNode
  components: ReactNode
  sections: ReactNode
  isolated: boolean
  depth: number
  pagePerSection: boolean
}

const SectionRenderer: FC<SectionRendererProps> = (props) => (
  <Spacer size="xl">
    {props.name ? (
      <SectionHeading
        depth={props.depth}
        id={props.slug}
        slotName="sectionToolbar"
        pagePerSection={props.pagePerSection}
        slotProps={props}
        children={props.name}
      />
    ) : null}
    {props.content}
    {props.sections}
    {props.components}
  </Spacer>
)

export default SectionRenderer
