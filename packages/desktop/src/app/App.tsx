import React from 'react'

import {
  styled,
  StarIcon,
  QuestionIcon,
} from '@qiwi/pijma-core'

import {
  Button,
  ButtonKind,
  ButtonSize,
  TextInputField,
  ButtonType,
  Actions,
  ActionsSize,
} from '@qiwi/pijma-desktop'

import './global'

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

export interface AppState {
  button: {
    type: ButtonType
    kind: ButtonKind
    size: ButtonSize
    disabled: boolean
    loading: boolean
    icon: boolean
    text: boolean
    long: boolean
  }
  actions: {
    vertical: boolean
    size: ActionsSize
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
        size: 'accent',
        disabled: false,
        loading: false,
        icon: true,
        text: true,
        long: false,
      },
      actions: {
        size: 'accent',
        vertical: false,
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
        {this.renderActions()}
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
              size={this.state.button.size}
              icon={this.state.button.icon ? <StarIcon/> : undefined}
              text={this.state.button.text ? (this.state.button.long ? 'Оплатить без комиссии' : 'Оплатить') : undefined}
              onClick={() => this.setState({button: {...this.state.button, ...{loading: !this.state.button.loading}}})}
            />
          </Section>
          <Section>
            {(['brand', 'simple'] as ButtonKind[]).map(kind => (
              <div key={`button-options-kind-${kind}`}>
                <label>
                  <input
                    type="radio"
                    name="button-kind"
                    checked={this.state.button.kind === kind}
                    onChange={() => this.setState({button: {...this.state.button, ...{kind}}})}
                  />
                  {kind}
                </label>
              </div>
            ))}
            <br/>
            {(['accent', 'normal', 'minor'] as ButtonSize[]).map(size => (
              <div key={`button-options-size-${size}`}>
                <label>
                  <input
                    type="radio"
                    name="button-size"
                    checked={this.state.button.size === size}
                    onChange={() => this.setState({button: {...this.state.button, ...{size}}})}
                  />
                  {size}
                </label>
              </div>
            ))}
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

  private renderActions() {
    return (
      <Dl>
        <Dt>actions</Dt>
        <Dd>
          <Section>
            <Actions
              size={this.state.actions.size}
              vertical={this.state.actions.vertical}
            >
              <Button
                type="button"
                kind="brand"
                size={this.state.actions.size}
                text="Оплатить"
              />
              <Button
                type="button"
                kind="simple"
                size={this.state.actions.size}
                text="Отменить"
              />
            </Actions>
          </Section>
          <Section>
            {(['accent', 'normal', 'minor'] as ActionsSize[]).map(size => (
              <div key={`actions-options-size-${size}`}>
                <label>
                  <input
                    type="radio"
                    name="actions-size"
                    checked={this.state.actions.size === size}
                    onChange={() => this.setState({actions: {...this.state.actions, ...{size}}})}
                  />
                  {size}
                </label>
              </div>
            ))}
          </Section>
          <Section>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.actions.vertical}
                  onChange={() => this.setState({actions: {...this.state.actions, ...{vertical: !this.state.actions.vertical}}})}
                />
                vertical
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
