import React from 'react'
import renderer from 'react-test-renderer'

import { ErrorMessage } from '../main'

describe('Icon', () => {
  it('is properly exported from lib index', () => {
    expect(ErrorMessage).not.toBeUndefined()
  })

  it('renders correctly', () => {
    const component = renderer
      .create(
        <ErrorMessage
          message="Сообщение ошибки!!!"
          title="Заголовок ошибки"
          icon="plus"
          iconColor="#00FF00"
        />,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const component = renderer
      .create(<ErrorMessage message="Сообщение ощибки!!!" />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
