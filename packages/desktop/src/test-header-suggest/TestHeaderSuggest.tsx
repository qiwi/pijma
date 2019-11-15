import React, {createRef, Fragment, FunctionComponent, RefObject} from 'react'

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
  Spinner,
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
import {DropDown} from '../drop-down'

import TestHeaderSuggestProps from './TestHeaderSuggestProps'
import TestHeaderSuggestOptionModel from './TestHeaderSuggestOptionModel'

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

const CardPos = Card.withComponent(Pos)
const CardItem = styled(Card)().withComponent(MenuItem)

const dropDownContainerRef: RefObject<HTMLDivElement> = createRef()

export const TestHeaderSuggest = <V extends {}>({
  equals = (a: V, b: V) => a === b,
  placeholder = 'Текстовое поле',
  ...props
}: TestHeaderSuggestProps<TestHeaderSuggestOptionModel<V>, V>) => (
  <SuggestControl<V>
    value={props.value}
    suggest={props.suggest}
    items={props.items}
    total={props.total}
    equals={equals}
    onRequest={props.onRequest}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
    onSubmit={props.onSubmit}
    onCancel={props.onCancel}
    onHide={props.onHide}
    children={(renderProps) => (
      <MenuControl
        count={props.items ? props.items.length : 0}
        selected={renderProps.selected}
        onSelect={renderProps.onSelect}
        onKeyDown={renderProps.onKeyDown}
        children={(menuRenderProps) => (
          <Pos
            type="relative"
            ref={dropDownContainerRef}
            width={1}
          >
            <Overlay
              target={props.target}
              container={props.container}
              show={props.show}
              rootClose={true}
              transition={contentTransition}
              onHide={props.onCancel}
              children={() => (
                <CardPos
                  type="absolute"
                  top={0}
                  zIndex={998}
                  width={1}
                >
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
                        <FlexItem cursor="pointer" shrink={0} mr={4} onClick={props.onCancel}>
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
                            onKeyDown={renderProps.show ? menuRenderProps.onKeyDown : renderProps.onKeyDown}
                            onFocus={renderProps.onFocus}
                          />
                        </FlexItem>
                        <FlexItem shrink={0} ml={4} onClick={renderProps.onSearchClick}>
                          {props.loading ? (
                            <Spinner color="#ff8c00" width={6} height={6}/>
                          ) : (
                            <Box cursor="pointer" width={6} height={6}>
                              <Icon name="search" color="#666"/>
                            </Box>
                          )}
                        </FlexItem>
                      </Flex>
                    </Box>
                  </Card>
                  <DropDown
                    show={renderProps.show}
                    minWidth={1}
                    offset={-13}
                    rootClose={true}
                    container={dropDownContainerRef.current}
                    target={renderProps.inputRef.current!}
                    onHide={renderProps.onHide}
                  >
                    <Card
                      ref={menuRenderProps.containerRef}
                      overflow="auto"
                      maxHeight={84}
                      s="0 0 25px 0 rgba(0, 0, 0, 0.08)"
                      bg="#fff"
                    >
                      <Box width={295} mx="auto">
                        {props.loading ? (
                          Array(4).fill(1).map((_item, key) => (
                            <CardItem key={key} icon={true} stub text="stub" notes="stub"/>
                          ))
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
                                    text={props.items[key].title}
                                    notes={props.items[key].description}
                                    icon={<Image width={6} height={6} src={props.items[key].logo}/>}
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
                            {props.total && props.items && props.items.length > 0 ? (
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
                            ) : (
                              null
                            )}
                          </Spacer>
                        )}
                      </Box>
                    </Card>
                  </DropDown>
                </CardPos>
              )}
            />
          </Pos>
        )}
      />
    )}
  />
)
