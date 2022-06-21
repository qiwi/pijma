import { LinkControl, LinkControlProps } from './LinkControl'

const defaultLinkClickHandler: LinkControlProps['onClick'] = (
  href,
  target,
  download,
) => {
  if (download && href) {
    const a = document.createElement('a')
    a.download = typeof download === 'string' ? download : ''
    a.href = href
    a.target = target || '_blank'
    document.body.appendChild(a)
    a.click()
    a.remove()
  } else {
    window.open(href, target || '_self')
  }
  return true
}

export const applyDefaultClickHandler = (
  onClick: LinkControlProps['onClick'] = defaultLinkClickHandler,
) => {
  LinkControl.defaultProps.onClick = onClick
}
