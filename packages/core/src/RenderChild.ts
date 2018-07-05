import React from 'react'

export default interface RenderChild<P> {
  (props: P): React.ReactElement<P>
}
