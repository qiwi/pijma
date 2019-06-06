import React, {FC} from 'react'

// @ts-ignore
import MdFullscreen from 'react-icons/lib/md/fullscreen'
// @ts-ignore
import MdFullscreenExit from 'react-icons/lib/md/fullscreen-exit'
// @ts-ignore
import ToolbarButton from 'rsg-components/ToolbarButton'
// @ts-ignore
import getUrl from 'react-styleguidist/lib/client/utils/getUrl'

interface IsolateButtonProps {
  name: string
  example: number
  isolated: boolean
}

const IsolateButton: FC<IsolateButtonProps> = ({name, example, isolated}) => (
  isolated ? (
    <ToolbarButton
      href={getUrl({
        name,
        hashPath: decodeURI(location.hash).split('/').slice(1, -2),
      })}
      title="Show all components"
    >
      <MdFullscreenExit/>
    </ToolbarButton>
  ) : (
    <ToolbarButton
      href={getUrl({
        name,
        example,
        hashPath: decodeURI(location.hash).split('/').slice(1, -1),
      })}
      title="Open isolated"
    >
      <MdFullscreen/>
    </ToolbarButton>
  )
)

export default IsolateButton
