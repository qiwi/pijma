import React from 'react'

import {styled} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'

import './global'

const IconWrapper = styled('span')({
  display: 'inline-block',
  width: 24,
  height: 24,
  margin: 8,
})

const Dl = styled('dl')({
  margin: 10,
})

const Dt = styled('dt')({
  marginTop: 40,
  marginRight: 20,
  marginBottom: 20,
  marginLeft: 20,
  fontSize: 20,
  fontWeight: 500,
  textTransform: 'capitalize',
})

const Dd = styled('dd')({
  margin: 20,
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: 1000,
})

const Section = styled('section')({
  flex: 1,
  marginRight: 20,
  '&:last-child': {
    marginRight: 0,
  },
})

export interface AppState {}

export default class App extends React.Component<{}, AppState> {

  public constructor(props: {}) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <React.Fragment>
        {this.renderIcons()}
      </React.Fragment>
    )
  }

  public renderIcons() {
    return (
      <Dl>
        <Dt>
          icons
        </Dt>
        <Dd>
          <IconWrapper>
            <Icon name="eye-closed"/>
          </IconWrapper>
          <IconWrapper>
            <Icon name="eye-opened"/>
          </IconWrapper>
          <IconWrapper>
            <Icon name="repeat"/>
          </IconWrapper>
          <IconWrapper>
            <Icon name="star"/>
          </IconWrapper>
        </Dd>
      </Dl>
    )
  }
}
