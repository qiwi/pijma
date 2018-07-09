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
  TextField,
  PasswordField,
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
  textField: {
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
  passwordField: {
    value: string
    disabled: boolean
    help: boolean
    error: boolean
    hint: boolean
    viewed: boolean
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
      textField: {
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
      passwordField: {
        value: '',
        disabled: false,
        help: true,
        error: false,
        hint: true,
        viewed: true,
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
        {this.renderTextField()}
        {this.renderPasswordField()}
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

  public renderTextField() {
    return (
      <Dl>
        <Dt>
          text field
        </Dt>
        <Dd>
          <Section>
            <TextField
              type={this.state.textField.type}
              name={this.state.textField.type}
              title={this.state.textField.type}
              disabled={this.state.textField.disabled}
              error={this.state.textField.error ? 'Ошибка: Техническая ошибка' : undefined}
              maxLength={this.state.textField.maxLength ? 10 : undefined}
              hint={this.state.textField.hint ? <QuestionIcon/> : undefined}
              help={this.state.textField.help ? 'Подсказка' : undefined}
              action={this.state.textField.action ? <a href="#">action</a> : undefined}
              placeholder={this.state.textField.placeholder ? 'Плейсхолдер' : undefined}
              value={this.state.textField.value}
              onChange={(value) => this.setState({textField: Object.assign({}, this.state.textField, {value})})}
            />
          </Section>
          <Section>
            <div>
              <label>
                <input
                  type="radio"
                  name="text-input-field-type"
                  checked={this.state.textField.type === 'text'}
                  onChange={() => this.setState({textField: {...this.state.textField, ...{type: 'text'}}})}
                />
                text
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="text-input-field-type"
                  checked={this.state.textField.type === 'password'}
                  onChange={() => this.setState({textField: {...this.state.textField, ...{type: 'password'}}})}
                />
                password
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="text-input-field-type"
                  checked={this.state.textField.type === 'tel'}
                  onChange={() => this.setState({textField: {...this.state.textField, ...{type: 'tel'}}})}
                />
                tel
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="text-input-field-type"
                  checked={this.state.textField.type === 'number'}
                  onChange={() => this.setState({textField: {...this.state.textField, ...{type: 'number'}}})}
                />
                number
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="text-input-field-type"
                  checked={this.state.textField.type === 'search'}
                  onChange={() => this.setState({textField: {...this.state.textField, ...{type: 'search'}}})}
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
                  checked={this.state.textField.disabled}
                  onChange={() => this.setState({textField: {...this.state.textField, ...{disabled: !this.state.textField.disabled}}})}
                />
                disabled
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.textField.placeholder}
                  onChange={() => this.setState({textField: {...this.state.textField, ...{placeholder: !this.state.textField.placeholder}}})}
                />
                placeholder
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.textField.error}
                  onChange={() => this.setState({textField: {...this.state.textField, ...{error: !this.state.textField.error}}})}
                />
                error
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.textField.hint}
                  onChange={() => this.setState({textField: {...this.state.textField, ...{hint: !this.state.textField.hint}}})}
                />
                hint
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.textField.help}
                  onChange={() => this.setState({textField: {...this.state.textField, ...{help: !this.state.textField.help}}})}
                />
                help
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.textField.action}
                  onChange={() => this.setState({textField: {...this.state.textField, ...{action: !this.state.textField.action}}})}
                />
                action
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.textField.maxLength}
                  onChange={() => this.setState({textField: {...this.state.textField, ...{maxLength: !this.state.textField.maxLength}}})}
                />
                maxLength
              </label>
            </div>
          </Section>
        </Dd>
      </Dl>
    )
  }

  public renderPasswordField() {
    return (
      <Dl>
        <Dt>
          password field
        </Dt>
        <Dd>
          <Section>
            <PasswordField
              name="password"
              title="password"
              disabled={this.state.passwordField.disabled}
              viewed={this.state.passwordField.viewed}
              error={this.state.passwordField.error ? 'Ошибка: Техническая ошибка' : undefined}
              maxLength={this.state.passwordField.maxLength ? 10 : undefined}
              hint={this.state.passwordField.hint ? <QuestionIcon/> : undefined}
              help={this.state.passwordField.help ? 'Подсказка' : undefined}
              action={this.state.passwordField.action ? <a href="#">action</a> : undefined}
              placeholder={this.state.passwordField.placeholder ? 'Плейсхолдер' : undefined}
              value={this.state.passwordField.value}
              onChange={(value) => this.setState({passwordField: Object.assign({}, this.state.passwordField, {value})})}
            />
          </Section>
          <Section>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.passwordField.disabled}
                  onChange={() => this.setState({passwordField: {...this.state.passwordField, ...{disabled: !this.state.passwordField.disabled}}})}
                />
                disabled
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.passwordField.placeholder}
                  onChange={() => this.setState({passwordField: {...this.state.passwordField, ...{placeholder: !this.state.passwordField.placeholder}}})}
                />
                placeholder
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.passwordField.error}
                  onChange={() => this.setState({passwordField: {...this.state.passwordField, ...{error: !this.state.passwordField.error}}})}
                />
                error
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.passwordField.hint}
                  onChange={() => this.setState({passwordField: {...this.state.passwordField, ...{hint: !this.state.passwordField.hint}}})}
                />
                hint
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.passwordField.help}
                  onChange={() => this.setState({passwordField: {...this.state.passwordField, ...{help: !this.state.passwordField.help}}})}
                />
                help
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.passwordField.action}
                  onChange={() => this.setState({passwordField: {...this.state.passwordField, ...{action: !this.state.passwordField.action}}})}
                />
                action
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.passwordField.viewed}
                  onChange={() => this.setState({passwordField: {...this.state.passwordField, ...{viewed: !this.state.passwordField.viewed}}})}
                />
                viewed
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.passwordField.maxLength}
                  onChange={() => this.setState({passwordField: {...this.state.passwordField, ...{maxLength: !this.state.passwordField.maxLength}}})}
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
