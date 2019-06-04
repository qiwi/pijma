import React, {FC, ReactNode, Component} from 'react'

import {styled, css, cssValue, Modal, ModalProps, SimpleTransition, SimpleTransitionProps, Card, Waypoint} from '@qiwi/pijma-core'

interface HeaderMenuProps {
  show: boolean
  zIndex?: number
  header?: ReactNode
  from: 'top' | 'right' | 'bottom' | 'left'
  onShow?: () => void
  onHide?: () => void
}

interface HeaderMenuState {
  scrolled: boolean
}

interface HeaderMenuModalProps extends ModalProps {
  zIndex?: number
}

const containerClassName = css({
  position: 'fixed',
})

const translate3d: { [direction in HeaderMenuProps['from']]: string } = {
  top: '0, -100%, 0',
  right: '100%, 0, 0',
  bottom: '0, 100%, 0',
  left: '-100%, 0, 0',
}

const defaultProps = (direction: HeaderMenuProps['from']) => ({
  timeout: {
    enter: 300,
    exit: 100,
  },
  enterClassName: (timeout: number) => css({
    transform: 'translate3d(0, 0, 0)',
    transition: `transform ${timeout - 1}ms cubic-bezier(0.4, 0.0, 0.2, 1) 1ms`,
  }),
  exitClassName: (timeout: number) => css({
    transform: `translate3d(${translate3d[direction]})`,
    transition: `transform ${timeout - 1}ms cubic-bezier(0.4, 0.0, 0.2, 1) 1ms`,
  }),
})

const contentTransitionTop: FC<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>
const contentTransitionRight: FC<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>
const contentTransitionBottom: FC<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>
const contentTransitionLeft: FC<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

contentTransitionTop.defaultProps = defaultProps('top')
contentTransitionRight.defaultProps = defaultProps('right')
contentTransitionBottom.defaultProps = defaultProps('bottom')
contentTransitionLeft.defaultProps = defaultProps('left')

const contentTransition: { [direction in HeaderMenuProps['from']]: FC<SimpleTransitionProps> } = {
  top: contentTransitionTop,
  right: contentTransitionRight,
  bottom: contentTransitionBottom,
  left: contentTransitionLeft,
}

const HeaderMenuModal = styled(Modal, {
  shouldForwardProp: (prop) => !['zIndex'].includes(prop),
})<HeaderMenuModalProps>(({theme, ...props}) => ({
  position: 'fixed',
  zIndex: props.zIndex,
  top: cssValue(0, theme.scale),
  bottom: cssValue(0, theme.scale),
  left: cssValue(0, theme.scale),
  right: cssValue(0, theme.scale),
}))

HeaderMenuModal.defaultProps = {
  zIndex: 9999,
}

export class HeaderMenu extends Component<HeaderMenuProps, HeaderMenuState> {

  protected menu: React.RefObject<HTMLDivElement> = React.createRef()

  public state = {
    scrolled: false,
  }

  public render() {
    const {show, zIndex, header, from, onShow, onHide, children} = this.props
    const {scrolled} = this.state
    return (
      <HeaderMenuModal
        autoFocus
        show={show}
        zIndex={zIndex}
        onShow={onShow}
        onHide={onHide}
        transition={contentTransition[from]}
        containerClassName={containerClassName}
        children={(
          <Card bg="#fff" width={1} height={1} s="0 8px 16px 0 rgba(0, 0, 0, 0.12)">
            <Card height={15} s={scrolled ? '0 1px 2px 0 rgba(0, 0, 0, 0.12)' : undefined} transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)">
              {header}
            </Card>
            <Card ref={this.menu} width={1} height="calc(100% - 60px)" overflow="auto">
              <Waypoint
                scrollableAncestor={this.menu.current}
                topOffset={-8}
                onEnter={() => this.setState({scrolled: false})}
                onLeave={() => this.setState({scrolled: true})}
              />
              {children}
            </Card>
          </Card>
        )}
      />
    )
  }

}
