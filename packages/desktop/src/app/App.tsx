import React from 'react'

import {
  styled,
  Icon,
} from '@qiwi/pijma-core'

import {
  IconName,
  WeakIcon,
  StarIcon,
  QuestionIcon,
} from '@qiwi/pijma-media'

import {
  Button,
  ButtonKind,
  ButtonSize,
  ButtonType,
  TextField,
  PasswordField,
  MaskTextField,
  MaskPasswordField,
  CheckboxField,
  RadioField,
  Actions,
  ActionsSize,
  SimpleModal,
} from '@qiwi/pijma-desktop'

import './global'

const IconWrapper = styled('span')({
  display: 'inline-block',
  width: 24,
  height: 24,
  margin: 8,
})

const iconNames: IconName[] = [
  'calendar',
  'clock',
  'cross',
  'download',
  'eye-closed',
  'eye-opened',
  'hamburger',
  'login',
  'logout',
  'percent',
  'question',
  'repeat',
  'search',
  'settings',
  'share',
  'star',
]

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
    features: string[]
    type: ButtonType
    kind: ButtonKind
    size: ButtonSize
  }
  actions: {
    features: string[]
    size: ActionsSize
  }
  checkboxField: {
    features: string[]
    values: string[]
  }
  radioField: {
    features: string[]
    value: string
  }
  textField: {
    features: string[]
    value: string
    type: 'text' | 'password' | 'tel' | 'number' | 'search' | 'email' | 'url'
  }
  passwordField: {
    features: string[]
    value: string
  }
  maskTextField: {
    features: string[]
    value: string
    type: undefined | 'text' | 'password' | 'tel'
  }
  maskPasswordField: {
    features: string[]
    value: string
  }
  modal: {
    features: string[]
    show: boolean
  }
}

export default class App extends React.Component<{}, AppState> {

  public constructor(props: {}) {
    super(props)
    this.state = {
      button: {
        features: ['icon', 'text'],
        type: 'button',
        kind: 'brand',
        size: 'accent',
      },
      actions: {
        features: [],
        size: 'accent',
      },
      checkboxField: {
        features: ['hint', 'help'],
        values: ['banana'],
      },
      radioField: {
        features: ['hint', 'help'],
        value: 'banana',
      },
      textField: {
        features: ['help', 'hint', 'action'],
        value: '',
        type: 'text',
      },
      passwordField: {
        features: ['help', 'hint', 'action', 'viewed'],
        value: '',
      },
      maskTextField: {
        features: ['help', 'hint', 'action'],
        value: '',
        type: undefined,
      },
      maskPasswordField: {
        features: ['help', 'hint', 'action', 'viewed'],
        value: '',
      },
      modal: {
        features: [],
        show: false,
      },
    }
  }

  public render() {
    return (
      <React.Fragment>
        {this.renderIcons()}
        {this.renderWeakIcons()}
        {this.renderCheckboxField()}
        {this.renderRadioField()}
        {this.renderButtons()}
        {this.renderActions()}
        {this.renderTextField()}
        {this.renderPasswordField()}
        {this.renderMaskTextField()}
        {this.renderMaskPasswordField()}
        {this.renderModal()}
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
          {iconNames.map(name => (
            <IconWrapper key={name}>
              <Icon name={name}/>
            </IconWrapper>
          ))}
        </Dd>
      </Dl>
    )
  }

  public renderWeakIcons() {
    return (
      <Dl>
        <Dt>
          weak icons (@qiwi/pijma-media)
        </Dt>
        <Dd>
          {iconNames.map(name => (
            <IconWrapper key={name}>
              <WeakIcon name={name}/>
            </IconWrapper>
          ))}
        </Dd>
      </Dl>
    )
  }

  public renderCheckboxField() {
    return (
      <Dl>
        <Dt>
          checkbox field
        </Dt>
        <Dd>
          <Section>
            <div>
              <CheckboxField
                title="Checkbox"
                hint={this.state.checkboxField.features.includes('hint') ? <QuestionIcon/> : null}
                help={this.state.checkboxField.features.includes('help') ? 'Вариант дополнительной подсказки. Больший объем текста увеличивает отступ от текста подсказки до следующего поля' : null}
                options={[{
                  label: 'Banana',
                  description: 'yellow fruit',
                  value: 'banana',
                  disabled: true,
                }, {
                  label: 'Apple',
                  description: 'green, red or yellow fruit',
                  value: 'apple',
                  disabled: false,
                }, {
                  label: 'Mango',
                  description: 'another yellow fruit',
                  value: 'mango',
                  disabled: false,
                }]}
                values={this.state.checkboxField.values}
                onChange={(values) => this.setState({checkboxField: {...this.state.checkboxField, ...{values}}})}
              />
            </div>
          </Section>
          <Section>
            <CheckboxField
              options={[{
                label: 'hint',
                value: 'hint',
              }, {
                label: 'help',
                value: 'help',
              }]}
              values={this.state.checkboxField.features}
              onChange={(features) => this.setState({checkboxField: {...this.state.checkboxField, ...{features}}})}
            />
          </Section>
        </Dd>
      </Dl>
    )
  }

  public renderRadioField() {
    return (
      <Dl>
        <Dt>
          radio field
        </Dt>
        <Dd>
          <Section>
            <div>
              <RadioField
                title="Radio"
                hint={this.state.radioField.features.includes('hint') ? <QuestionIcon/> : null}
                help={this.state.radioField.features.includes('help') ? 'Вариант дополнительной подсказки. Больший объем текста увеличивает отступ от текста подсказки до следующего поля' : null}
                options={[{
                  label: 'Banana',
                  description: 'yellow fruit',
                  value: 'banana',
                  disabled: true,
                }, {
                  label: 'Apple',
                  description: 'green, red or yellow fruit',
                  value: 'apple',
                  disabled: false,
                }, {
                  label: 'Mango',
                  description: 'another yellow fruit',
                  value: 'mango',
                  disabled: false,
                }]}
                value={this.state.radioField.value}
                onChange={(value) => this.setState({radioField: {...this.state.radioField, ...{value}}})}
              />
            </div>
          </Section>
          <Section>
            <CheckboxField
              options={[{
                label: 'hint',
                value: 'hint',
              }, {
                label: 'help',
                value: 'help',
              }]}
              values={this.state.radioField.features}
              onChange={(features) => this.setState({radioField: {...this.state.radioField, ...{features}}})}
            />
          </Section>
        </Dd>
      </Dl>
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
              disabled={this.state.button.features.includes('disabled')}
              loading={this.state.button.features.includes('loading')}
              kind={this.state.button.kind}
              size={this.state.button.size}
              icon={this.state.button.features.includes('icon') ? <StarIcon/> : undefined}
              text={this.state.button.features.includes('text') ? (this.state.button.features.includes('long') ? 'Оплатить без комиссии' : 'Оплатить') : undefined}
            />
          </Section>
          <Section>
            <RadioField
              options={[{
                label: 'brand',
                value: 'brand',
              }, {
                label: 'simple',
                value: 'simple',
              }]}
              value={this.state.button.kind}
              onChange={(kind) => this.setState({button: {...this.state.button, ...{kind}}})}
            />
          </Section>
          <Section>
            <RadioField
              options={[{
                label: 'accent',
                value: 'accent',
              }, {
                label: 'normal',
                value: 'normal',
              }, {
                label: 'minor',
                value: 'minor',
              }]}
              value={this.state.button.size}
              onChange={(size) => this.setState({button: {...this.state.button, ...{size}}})}
            />
          </Section>
          <Section>
            <CheckboxField
              options={[{
                label: 'disabled',
                value: 'disabled',
              }, {
                label: 'loading',
                value: 'loading',
              }, {
                label: 'icon',
                value: 'icon',
              }, {
                label: 'text',
                value: 'text',
              }, {
                label: 'long',
                value: 'long',
              }]}
              values={this.state.button.features}
              onChange={(features) => this.setState({button: {...this.state.button, ...{features}}})}
            />
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
              vertical={this.state.actions.features.includes('vertical')}
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
            <RadioField
              options={[{
                label: 'accent',
                value: 'accent',
              }, {
                label: 'normal',
                value: 'normal',
              }, {
                label: 'minor',
                value: 'minor',
              }]}
              value={this.state.actions.size}
              onChange={(size) => this.setState({actions: {...this.state.actions, ...{size}}})}
            />
          </Section>
          <Section>
            <CheckboxField
              options={[{
                label: 'vertical',
                value: 'vertical',
              }]}
              values={this.state.actions.features}
              onChange={(features) => this.setState({actions: {...this.state.actions, ...{features}}})}
            />
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
              disabled={this.state.textField.features.includes('disabled')}
              error={this.state.textField.features.includes('error') ? 'Ошибка: Техническая ошибка' : undefined}
              maxLength={this.state.textField.features.includes('maxLength') ? 10 : undefined}
              hint={this.state.textField.features.includes('hint') ? <QuestionIcon/> : undefined}
              help={this.state.textField.features.includes('help') ? 'Подсказка' : undefined}
              action={this.state.textField.features.includes('action') ? <a href="#">action</a> : undefined}
              placeholder={this.state.textField.features.includes('placeholder') ? 'Плейсхолдер' : undefined}
              value={this.state.textField.value}
              onChange={(value) => this.setState({textField: Object.assign({}, this.state.textField, {value})})}
            />
          </Section>
          <Section>
            <RadioField
              options={[{
                label: 'text',
                value: 'text',
              }, {
                label: 'password',
                value: 'password',
              }, {
                label: 'tel',
                value: 'tel',
              }, {
                label: 'number',
                value: 'number',
              }, {
                label: 'search',
                value: 'search',
              }, {
                label: 'email',
                value: 'email',
              }, {
                label: 'url',
                value: 'url',
              }]}
              value={this.state.textField.type}
              onChange={(type) => this.setState({textField: {...this.state.textField, ...{type}}})}
            />
          </Section>
          <Section>
            <CheckboxField
              options={[{
                label: 'disabled',
                value: 'disabled',
              }, {
                label: 'placeholder',
                value: 'placeholder',
              }, {
                label: 'error',
                value: 'error',
              }, {
                label: 'hint',
                value: 'hint',
              }, {
                label: 'help',
                value: 'help',
              }, {
                label: 'action',
                value: 'action',
              }, {
                label: 'maxLength',
                value: 'maxLength',
              }]}
              values={this.state.textField.features}
              onChange={(features) => this.setState({textField: {...this.state.textField, ...{features}}})}
            />
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
              disabled={this.state.passwordField.features.includes('disabled')}
              viewed={this.state.passwordField.features.includes('viewed')}
              error={this.state.passwordField.features.includes('error') ? 'Ошибка: Техническая ошибка' : undefined}
              maxLength={this.state.passwordField.features.includes('maxLength') ? 10 : undefined}
              hint={this.state.passwordField.features.includes('hint') ? <QuestionIcon/> : undefined}
              help={this.state.passwordField.features.includes('help') ? 'Подсказка' : undefined}
              action={this.state.passwordField.features.includes('action') ? <a href="#">action</a> : undefined}
              placeholder={this.state.passwordField.features.includes('placeholder') ? 'Плейсхолдер' : undefined}
              value={this.state.passwordField.value}
              onChange={(value) => this.setState({passwordField: Object.assign({}, this.state.passwordField, {value})})}
            />
          </Section>
          <Section>
            <CheckboxField
              options={[{
                label: 'disabled',
                value: 'disabled',
              }, {
                label: 'placeholder',
                value: 'placeholder',
              }, {
                label: 'error',
                value: 'error',
              }, {
                label: 'hint',
                value: 'hint',
              }, {
                label: 'help',
                value: 'help',
              }, {
                label: 'action',
                value: 'action',
              }, {
                label: 'viewed',
                value: 'viewed',
              }, {
                label: 'maxLength',
                value: 'maxLength',
              }]}
              values={this.state.passwordField.features}
              onChange={(features) => this.setState({passwordField: {...this.state.passwordField, ...{features}}})}
            />
          </Section>
        </Dd>
      </Dl>
    )
  }

  public renderMaskTextField() {
    return (
      <Dl>
        <Dt>
          mask text field
        </Dt>
        <Dd>
          <Section>
            <MaskTextField
              type={this.state.maskTextField.type}
              name={this.state.maskTextField.type}
              title={this.state.maskTextField.type}
              disabled={this.state.maskTextField.features.includes('disabled')}
              error={this.state.maskTextField.features.includes('error') ? 'Ошибка: Техническая ошибка' : undefined}
              maxLength={this.state.maskTextField.features.includes('maxLength') ? 10 : undefined}
              hint={this.state.maskTextField.features.includes('hint') ? <QuestionIcon/> : undefined}
              help={this.state.maskTextField.features.includes('help') ? 'Подсказка' : undefined}
              action={this.state.maskTextField.features.includes('action') ? <a href="#">action</a> : undefined}
              placeholder={this.state.maskTextField.features.includes('placeholder') ? 'Плейсхолдер' : undefined}
              value={this.state.maskTextField.value}
              mask={['(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
              onChange={(value) => this.setState({maskTextField: Object.assign({}, this.state.maskTextField, {value})})}
            />
          </Section>
          <Section>
            <RadioField
              options={[{
                label: 'undefined',
                value: undefined,
              }, {
                label: 'text',
                value: 'text',
              }, {
                label: 'password',
                value: 'password',
              }, {
                label: 'tel',
                value: 'tel',
              }]}
              value={this.state.maskTextField.type}
              onChange={(type) => this.setState({maskTextField: {...this.state.maskTextField, ...{type}}})}
            />
          </Section>
          <Section>
            <CheckboxField
              options={[{
                label: 'disabled',
                value: 'disabled',
              }, {
                label: 'placeholder',
                value: 'placeholder',
              }, {
                label: 'error',
                value: 'error',
              }, {
                label: 'hint',
                value: 'hint',
              }, {
                label: 'help',
                value: 'help',
              }, {
                label: 'action',
                value: 'action',
              }, {
                label: 'maxLength',
                value: 'maxLength',
              }]}
              values={this.state.maskTextField.features}
              onChange={(features) => this.setState({maskTextField: {...this.state.maskTextField, ...{features}}})}
            />
          </Section>
        </Dd>
      </Dl>
    )
  }

  public renderMaskPasswordField() {
    return (
      <Dl>
        <Dt>
          mask password field
        </Dt>
        <Dd>
          <Section>
            <MaskPasswordField
              name="password"
              title="password"
              disabled={this.state.maskPasswordField.features.includes('disabled')}
              viewed={this.state.maskPasswordField.features.includes('viewed')}
              error={this.state.maskPasswordField.features.includes('error') ? 'Ошибка: Техническая ошибка' : undefined}
              maxLength={this.state.maskPasswordField.features.includes('maxLength') ? 10 : undefined}
              hint={this.state.maskPasswordField.features.includes('hint') ? <QuestionIcon/> : undefined}
              help={this.state.maskPasswordField.features.includes('help') ? 'Подсказка' : undefined}
              action={this.state.maskPasswordField.features.includes('action') ? <a href="#">action</a> : undefined}
              placeholder={this.state.maskPasswordField.features.includes('placeholder') ? 'Плейсхолдер' : undefined}
              value={this.state.maskPasswordField.value}
              mask={[/\d/, /\d/, /\d/]}
              onChange={(value) => this.setState({maskPasswordField: Object.assign({}, this.state.maskPasswordField, {value})})}
            />
          </Section>
          <Section>
            <CheckboxField
              options={[{
                label: 'disabled',
                value: 'disabled',
              }, {
                label: 'placeholder',
                value: 'placeholder',
              }, {
                label: 'error',
                value: 'error',
              }, {
                label: 'hint',
                value: 'hint',
              }, {
                label: 'help',
                value: 'help',
              }, {
                label: 'action',
                value: 'action',
              }, {
                label: 'viewed',
                value: 'viewed',
              }, {
                label: 'maxLength',
                value: 'maxLength',
              }]}
              values={this.state.maskPasswordField.features}
              onChange={(features) => this.setState({maskPasswordField: {...this.state.maskPasswordField, ...{features}}})}
            />
          </Section>
        </Dd>
      </Dl>
    )
  }

  public renderModal() {
    return (
      <Dl>
        <Dt>modal</Dt>
        <Dd>
          <Section>
            <Actions size="normal">
              <Button
                kind="simple"
                size="normal"
                type="button"
                text="Open Modal"
                onClick={() => this.setState({modal: {...this.state.modal, ...{show: !this.state.modal.show}}})}
              />
            </Actions>
            <SimpleModal
              show={this.state.modal.show}
              closable={this.state.modal.features.includes('closable')}
              escapeClose={this.state.modal.features.includes('escapeClose')}
              backdropClose={this.state.modal.features.includes('backdropClose')}
              onHide={() => this.setState({modal: {...this.state.modal, ...{show: false}}})}
              children={(
                <React.Fragment>
                  <strong>Modal</strong>
                  <br/>
                  <br/>
                  <Actions size="normal">
                    <Button
                      kind="brand"
                      size="normal"
                      type="button"
                      text="Close Modal"
                      onClick={() => this.setState({modal: {...this.state.modal, ...{show: !this.state.modal.show}}})}
                    />
                  </Actions>
                </React.Fragment>
              )}
            />
          </Section>
          <Section>
            <CheckboxField
              options={[{
                label: 'closable',
                value: 'closable',
              }, {
                label: 'escapeClose',
                value: 'escapeClose',
              }, {
                label: 'backdropClose',
                value: 'backdropClose',
              }]}
              values={this.state.modal.features}
              onChange={(features) => this.setState({modal: {...this.state.modal, ...{features}}})}
            />
          </Section>
        </Dd>
      </Dl>
    )
  }

}
