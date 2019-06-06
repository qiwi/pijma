import React, {FC} from 'react'

import {Link, LinkProps} from '@qiwi/pijma-desktop'

const LinkRenderer: FC<LinkProps> = (props) => (
  <Link {...props}/>
)

export default LinkRenderer
