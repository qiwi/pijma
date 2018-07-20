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
  TextField,
  PasswordField,
  MaskTextField,
  MaskPasswordField,
  CheckboxField,
  RadioField,
  Actions,
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
    features: string[]
    type: ButtonType
    kind: ButtonKind
  }
  actions: {}
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
}

export default class App extends React.Component<{}, AppState> {

  public constructor(props: {}) {
    super(props)
    this.state = {
      button: {
        features: ['icon', 'text'],
        type: 'button',
        kind: 'brand',
      },
      actions: {},
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
    }
  }

  public render() {
    return (
      <React.Fragment>
        {this.renderCheckboxField()}
        {this.renderRadioField()}
        {this.renderButtons()}
        {this.renderActions()}
        {this.renderTextField()}
        {this.renderPasswordField()}
        {this.renderMaskTextField()}
        {this.renderMaskPasswordField()}
      </React.Fragment>
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
            <Actions>
              <Button
                type="button"
                kind="brand"
                text="Оплатить"
              />
              <Button
                type="button"
                kind="simple"
                text="Отменить"
              />
            </Actions>
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

}
