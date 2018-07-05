import React from 'react'

import {
  styled,
  StarIcon,
  QuestionIcon,
} from '@qiwi/pijma-core'

import {
  Button,
  ButtonType,
  ButtonKind,
  TextInputField,
} from '@qiwi/pijma-mobile'

import './global'

const Dl = styled('dl')({
  padding: 10,
})

const Dt = styled('dt')({
  paddingTop: 20,
  paddingRight: 20,
  paddingBottom: 20,
  paddingLeft: 20,
  fontSize: 20,
  fontWeight: 500,
  textTransform: 'capitalize',
})

const Dd = styled('dd')({
  padding: 20,
})

const Section = styled('section')({
  paddingBottom: 20,
})

export interface AppState {
  button: {
    type: ButtonType
    kind: ButtonKind
    disabled: boolean
    loading: boolean
    icon: boolean
    text: boolean
    long: boolean
  }
  input: {
    value: string
    type: 'text' | 'password' | 'tel' | 'number' | 'search'
    disabled: boolean
    help: boolean
    error: boolean
    hint: boolean
    action: boolean
    placeholder: boolean
    maxLength: boolean
  }
}

export default class App extends React.Component<{}, AppState> {

  public constructor(props: {}) {
    super(props)
    this.state = {
      button: {
        type: 'button',
        kind: 'brand',
        disabled: false,
        loading: false,
        icon: true,
        text: true,
        long: false,
      },
      input: {
        value: '',
        type: 'text',
        disabled: false,
        help: true,
        error: false,
        hint: true,
        action: true,
        placeholder: false,
        maxLength: false,
      },
    }
  }

  public render() {
    return (
      <React.Fragment>
        {this.renderButtons()}
        {this.renderInputs()}
      </React.Fragment>
    )
  }

  public renderButtons() {
    return (
      <Dl>
        <Dt>
          button
        </Dt>
        <Dd>
          <Section>
            <Button
              type={this.state.button.type}
              disabled={this.state.button.disabled}
              loading={this.state.button.loading}
              kind={this.state.button.kind}
              icon={this.state.button.icon ? <StarIcon/> : undefined}
              text={this.state.button.text ? (this.state.button.long ? 'Оплатить без комиссии и без гарантии' : 'Оплатить') : undefined}
              onClick={() => this.setState({button: {...this.state.button, ...{loading: !this.state.button.loading}}})}
            />
          </Section>
          <Section>
            <div>
              <label>
                <input
                  type="radio"
                  name="button-kind"
                  checked={this.state.button.kind === 'brand'}
                  onChange={() => this.setState({button: {...this.state.button, ...{kind: 'brand'}}})}
                />
                brand
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="button-kind"
                  checked={this.state.button.kind === 'simple'}
                  onChange={() => this.setState({button: {...this.state.button, ...{kind: 'simple'}}})}
                />
                simple
              </label>
            </div>
          </Section>
          <Section>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.button.disabled}
                  onChange={() => this.setState({button: {...this.state.button, ...{disabled: !this.state.button.disabled}}})}
                />
                disabled
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.button.loading}
                  onChange={() => this.setState({button: {...this.state.button, ...{loading: !this.state.button.loading}}})}
                />
                loading
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.button.icon}
                  onChange={() => this.setState({button: {...this.state.button, ...{icon: !this.state.button.icon}}})}
                />
                icon
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.button.text}
                  onChange={() => this.setState({button: {...this.state.button, ...{text: !this.state.button.text}}})}
                />
                text
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.button.long}
                  onChange={() => this.setState({button: {...this.state.button, ...{long: !this.state.button.long}}})}
                />
                long
              </label>
            </div>
          </Section>
        </Dd>
      </Dl>
    )
  }

  public renderInputs() {
    return (
      <Dl>
        <Dt>
          text input field
        </Dt>
        <Dd>
          <Section>
            <TextInputField
              type={this.state.input.type}
              name={this.state.input.type}
              title={this.state.input.type}
              disabled={this.state.input.disabled}
              error={this.state.input.error ? 'Ошибка: Техническая ошибка' : undefined}
              maxLength={this.state.input.maxLength ? 10 : undefined}
              hint={this.state.input.hint ? <QuestionIcon/> : undefined}
              help={this.state.input.help ? 'Подсказка' : undefined}
              action={this.state.input.action ? <a href="#">action</a> : undefined}
              placeholder={this.state.input.placeholder ? 'Плейсхолдер' : undefined}
              value={this.state.input.value}
              onChange={(value) => this.setState({input: Object.assign({}, this.state.input, {value})})}
            />
          </Section>
          <Section>
            <div>
              <label>
                <input
                  type="radio"
                  name="text-input-field-type"
                  checked={this.state.input.type === 'text'}
                  onChange={() => this.setState({input: {...this.state.input, ...{type: 'text'}}})}
                />
                text
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="text-input-field-type"
                  checked={this.state.input.type === 'password'}
                  onChange={() => this.setState({input: {...this.state.input, ...{type: 'password'}}})}
                />
                password
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="text-input-field-type"
                  checked={this.state.input.type === 'tel'}
                  onChange={() => this.setState({input: {...this.state.input, ...{type: 'tel'}}})}
                />
                tel
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="text-input-field-type"
                  checked={this.state.input.type === 'number'}
                  onChange={() => this.setState({input: {...this.state.input, ...{type: 'number'}}})}
                />
                number
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="text-input-field-type"
                  checked={this.state.input.type === 'search'}
                  onChange={() => this.setState({input: {...this.state.input, ...{type: 'search'}}})}
                />
                search
              </label>
            </div>
          </Section>
          <Section>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.input.disabled}
                  onChange={() => this.setState({input: {...this.state.input, ...{disabled: !this.state.input.disabled}}})}
                />
                disabled
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.input.placeholder}
                  onChange={() => this.setState({input: {...this.state.input, ...{placeholder: !this.state.input.placeholder}}})}
                />
                placeholder
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.input.error}
                  onChange={() => this.setState({input: {...this.state.input, ...{error: !this.state.input.error}}})}
                />
                error
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.input.hint}
                  onChange={() => this.setState({input: {...this.state.input, ...{hint: !this.state.input.hint}}})}
                />
                hint
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.input.help}
                  onChange={() => this.setState({input: {...this.state.input, ...{help: !this.state.input.help}}})}
                />
                help
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.input.action}
                  onChange={() => this.setState({input: {...this.state.input, ...{action: !this.state.input.action}}})}
                />
                action
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.input.maxLength}
                  onChange={() => this.setState({input: {...this.state.input, ...{maxLength: !this.state.input.maxLength}}})}
                />
                maxLength
              </label>
            </div>
          </Section>
        </Dd>
      </Dl>
    )
  }

}
