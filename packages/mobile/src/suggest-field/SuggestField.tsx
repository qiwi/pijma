import React, {Fragment} from 'react'

import {
  SuggestControl,
  Image,
  MenuControl,
  Pos,
  Box,
  Card,
  Spacer,
  styled,
  BasicInput,
  InputField,
} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'
import {Link} from '../link'
import {MenuItem} from '../menu'
import {InputModal} from '../input-modal'
import {Markdown} from '../markdown'

import SuggestFieldProps from './SuggestFieldProps'
import SuggestFieldOptionModel from './SuggestFieldOptionModel'

const CardItem = styled(Card)().withComponent(MenuItem)

export const SuggestField = <V extends {}>({
  equals = (a: V, b: V) => a === b,
  ...props
}: SuggestFieldProps<SuggestFieldOptionModel<V>, V>) => (
  props.stub ? (
    <InputField
      stub
      input={false}
      active={false}
      title={props.title}
      help={props.help}
      hint={props.hint}
    />
  ) : (
    <SuggestControl<V, SuggestFieldOptionModel<V>>
      value={props.value}
      suggest={props.suggest}
      items={props.items}
      total={React.isValidElement(props.total) || typeof props.total === 'string' ? undefined : props.total}
      empty={React.isValidElement(props.empty) || typeof props.empty === 'string' ? undefined : props.empty}
      equals={equals}
      onRequest={props.onRequest}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      onCancel={props.onCancel}
      onSubmit={props.onSubmit}
      children={(renderProps) => (
        <Pos type="relative">
          <Box
            width={1}
            onMouseEnter={renderProps.onInputMouseEnter}
            onMouseLeave={renderProps.onInputMouseLeave}
          >
            <InputField
              title={props.title}
              active={renderProps.focused || !!props.suggest || !!props.placeholder}
              input={(
                <BasicInput
                  ref={renderProps.inputRef}
                  type={props.type}
                  name={props.name}
                  value={props.suggest || ''}
                  tabIndex={props.tabIndex}
                  pr={props.hint ? 7 : undefined}
                  autoComplete={props.autoComplete}
                  autoFocus={props.autoFocus}
                  placeholder={props.placeholder}
                  maxLength={props.maxLength}
                  error={!!props.error}
                  focused={renderProps.focused}
                  onChange={renderProps.onRequest}
                  onFocus={renderProps.onShowFocus}
                  onBlur={renderProps.onInputBlur}
                />
              )}
              hint={props.hint}
              error={props.error}
              help={props.help}
              action={props.action}
            />
          </Box>
          <MenuControl
            count={renderProps.items.length}
            selected={renderProps.selected}
            onSelect={renderProps.onItemSelect}
            onKeyDown={renderProps.onModalItemKeyDown}
            children={(menuRenderProps) => (
              <InputModal
                value={props.suggest || ''}
                tabIndex={props.tabIndex}
                autoComplete={props.autoComplete}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                show={renderProps.show}
                inputRef={renderProps.inputRef}
                contentRef={menuRenderProps.containerRef}
                error={!!props.error}
                onChange={renderProps.onRequest}
                onKeyDown={renderProps.show ? menuRenderProps.onKeyDown : renderProps.onModalItemKeyDown}
                onBlur={renderProps.onModalInputBlur}
                onShow={renderProps.onShowClick}
                onHide={renderProps.onHide}
                onEscape={renderProps.onEscapeInputModal}
                onBack={renderProps.onBack}
                onSubmit={props.onSubmit ? renderProps.onSearchClick : undefined}
              >
                {props.loading ? (
                  Array(4).fill(1).map((_item, key) => (
                    <CardItem key={key} icon stub text="stub" notes="stub"/>
                  ))
                ) : (
                  <Spacer size="s">
                    {menuRenderProps.items.length > 0 ? (
                      <Fragment>
                        {menuRenderProps.items.map((item, key) => (
                          <CardItem
                            key={key}
                            ref={item.ref}
                            onClick={item.onClick}
                            onMouseEnter={item.onMouseEnter}
                            cursor="pointer"
                            text={renderProps.items[key].title}
                            notes={renderProps.items[key].description}
                            icon={renderProps.items[key].logo ? <Image width={6} height={6} src={renderProps.items[key].logo}/> : undefined}
                            hover={item.focused}
                            active={item.selected}
                            focus={item.selected}
                          />
                        ))}
                      </Fragment>
                    ) : (
                      null
                    )}
                    {props.total && menuRenderProps.items.length > 0 ? (
                      <Box px={6}>
                        {React.isValidElement(props.total) ? (
                          props.total
                        ) : (
                          typeof props.total === 'string' ? (
                            <Markdown children={props.total}/>
                          ) : (
                            <Paragraph>
                              {props.total.text}
                              {props.total.link ? (
                                <Fragment>
                                  {' '}
                                  <Link
                                    onClick={renderProps.onTotalClick}
                                    children={props.total.link.text}
                                  />
                                </Fragment>
                              ) : (
                                null
                              )}
                            </Paragraph>
                          )
                        )}
                      </Box>
                    ) : props.empty && menuRenderProps.items.length === 0 && props.items !== undefined ? (
                      <Box px={6}>
                        {React.isValidElement(props.empty) ? (
                          props.empty
                        ) : (
                          typeof props.empty === 'string' ? (
                            <Markdown children={props.empty}/>
                          ) : (
                            <Paragraph>
                              {props.empty.text}
                              {props.empty.link ? (
                                <Fragment>
                                  {' '}
                                  <Link
                                    onClick={renderProps.onEmptyClick}
                                    children={props.empty.link.text}
                                  />
                                </Fragment>
                              ) : (
                                null
                              )}
                            </Paragraph>
                          )
                        )}
                      </Box>
                    ) : (
                      null
                    )}
                  </Spacer>
                )}
              </InputModal>
            )}
          />
        </Pos>
      )}
    />
  )
)

SuggestField.defaultProps = {
  equals: (a: any, b: any) => a === b,
}
