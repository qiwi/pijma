import React, {Fragment, FunctionComponent} from 'react'

import {
  Image,
  MenuControl,
  Box,
  Card,
  styled,
  Spacer,
  Icon,
  Pos,
  FlexItem,
  Input,
  SimpleTransitionProps,
  SimpleTransition,
  Flex,
  Overlay,
  css,
  SuggestControl,
} from '@qiwi/pijma-core'

import {MenuItem} from '../menu'
import {Paragraph} from '../typography'
import {Link} from '../link'

import {HeaderSuggestProps} from './HeaderSuggestProps'
import {HeaderSuggestOptionModel} from './HeaderSuggestOptionModel'

const CardItem = styled(Card)().withComponent(MenuItem)

const contentTransition: FunctionComponent<SimpleTransitionProps> = (props) => <SimpleTransition {...props}/>

contentTransition.defaultProps = {
  timeout: {
    enter: 150,
    exit: 150,
  },
  enterClassName: (timeout: number) => css({
    opacity: 1,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
  exitClassName: (timeout: number) => css({
    opacity: 0,
    transition: `opacity ${timeout}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
  }),
}

export const HeaderSuggest = <V extends {}>({
  equals = (a: V, b: V) => a === b,
  placeholder = 'Текстовое поле',
  ...props
}: HeaderSuggestProps<HeaderSuggestOptionModel<V>, V>) => (
  <SuggestControl<V, HeaderSuggestOptionModel<V>>
    value={props.value}
    suggest={props.suggest}
    items={props.items}
    total={props.total}
    empty={props.empty}
    loading={props.loading}
    equals={equals}
    onRequest={props.onRequest}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
    onCancel={props.onCancel}
    onSubmit={props.onSubmit}
    children={(renderProps) => (
      <MenuControl
        count={renderProps.items.length}
        selected={renderProps.selected}
        onSelect={renderProps.onItemSelect}
        onKeyDown={renderProps.onModalItemKeyDown}
        children={(menuRenderProps) => (
          <React.Fragment>
            <Box
              width={6}
              height={6}
              onClick={renderProps.onShowClick}
            >
              <Icon name="search"/>
            </Box>
            <Overlay
              target={props.target.current}
              container={props.container.current}
              show={renderProps.show}
              rootClose={true}
              transition={contentTransition}
              onHide={renderProps.onHide}
              children={(overlayRenderProps) => (
                <Pos type="absolute" top={0} zIndex={10050} width={1} ref={overlayRenderProps.props.ref}>
                  <Card
                    height={20}
                    bg="#fff"
                    bb={props.error ? 'solid 2px #d0021b' : 'none'}
                    s="0 0 25px 0 rgba(0, 0, 0, 0.08)"
                  >
                    <Box width={295} mx="auto">
                      <Flex
                        align="center"
                        width={295}
                        mx="auto"
                        height={20}
                        py={4}
                        px={6}
                      >
                        <FlexItem cursor="pointer" shrink={0} mr={4} onClick={renderProps.onBack}>
                          <Icon name="arrow-left"/>
                        </FlexItem>
                        <FlexItem grow={1}>
                          <Input
                            ref={renderProps.inputRef}
                            tabIndex={props.tabIndex}
                            type="search"
                            autoComplete={props.autoComplete ? 'on' : 'off'}
                            value={props.suggest || ''}
                            valueWeight={300}
                            width={1}
                            autoFocus
                            valueSize={5}
                            placeholder={placeholder}
                            placeholderSize={5}
                            placeholderWeight={300}
                            onChange={renderProps.onRequest}
                            onBlur={renderProps.onModalInputBlur}
                            onKeyDown={renderProps.show ? menuRenderProps.onKeyDown : renderProps.onModalItemKeyDown}
                            onFocus={renderProps.onShowFocus}
                          />
                        </FlexItem>
                        <FlexItem shrink={0} ml={4} onClick={renderProps.onSearchClick}>
                          <Box cursor="pointer" width={6} height={6}>
                            <Icon name="search" color="#666"/>
                          </Box>
                        </FlexItem>
                      </Flex>
                    </Box>
                  </Card>
                  <Card
                    ref={menuRenderProps.containerRef}
                    overflow="auto"
                    maxHeight={84}
                    s="0 0 25px 0 rgba(0, 0, 0, 0.08)"
                    bg="#fff"
                  >
                    <Box width={295} mx="auto">
                      {props.loading && renderProps.result ? (
                        <Box pt={4}>
                          {Array(4).fill(1).map((_item, key) => (
                            <CardItem key={key} icon={true} stub text="stub" notes="stub"/>
                          ))}
                        </Box>
                      ) : (
                        <Spacer size="s">
                          {menuRenderProps.items.length > 0 ? (
                            <Fragment>
                              {menuRenderProps.items.map((item, key) => (
                                <CardItem
                                  key={key}
                                  ref={item.ref}
                                  cursor="pointer"
                                  mt={key === 0 ? 4 : undefined}
                                  round
                                  text={renderProps.items[key].title}
                                  notes={renderProps.items[key].description}
                                  icon={<Image width={6} height={6} src={renderProps.items[key].logo}/>}
                                  hover={item.focused}
                                  active={item.selected}
                                  focus={item.selected}
                                  onClick={item.onClick}
                                  onMouseEnter={item.onMouseEnter}
                                />
                              ))}
                            </Fragment>
                          ) : (
                            null
                          )}
                          {props.total && menuRenderProps.items.length > 0 ? (
                            <Box px={6} pb={4}>
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
                            </Box>
                          ) : props.empty && menuRenderProps.items.length === 0 && renderProps.result ? (
                            <Box px={6} py={4}>
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
                            </Box>
                          ) : (
                            null
                          )}
                        </Spacer>
                      )}
                    </Box>
                  </Card>
                </Pos>
              )}
            />
          </React.Fragment>
        )}
      />
    )}
  />
)
