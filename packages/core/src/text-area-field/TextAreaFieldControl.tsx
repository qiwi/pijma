import React from 'react';
import ReactDOM from 'react-dom';

import TextAreaFieldControlProps from './TextAreaFieldControlProps';
import TextAreaFieldControlState from './TextAreaFieldControlState';

export default class TextAreaFieldControl extends React.Component<
  TextAreaFieldControlProps,
  TextAreaFieldControlState
> {
  state = {
    focused: false,
    rows: 1
  };

  public componentDidMount(): void {
    this.resize();
  }

  public componentDidUpdate(prevProps: TextAreaFieldControlProps): void {
    if (this.props.value !== prevProps.value) {
      this.resize();
    }
  }

  private resize(): void {
    const element = (ReactDOM.findDOMNode(this) as HTMLElement).querySelector(
      'textarea'
    ) as HTMLTextAreaElement;

    element.style.height = '0px';

    const style = getComputedStyle(element);
    const lineHeight = parseInt(style.lineHeight || '0', 10);
    const scrollHeight = element.scrollHeight;

    element.style.height = 'auto';

    const rows = Math.ceil(scrollHeight / lineHeight);

    this.setState({
      rows
    });
  }

  private onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    if (this.props.onChange) {
      this.props.onChange(e.currentTarget.value);
    }
  };

  private onFocus: React.FocusEventHandler<HTMLTextAreaElement> = (
    event: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    this.setState({
      focused: true
    });
    event.preventDefault();
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  private onBlur: React.FocusEventHandler<HTMLTextAreaElement> = (
    e: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    this.setState({
      focused: false
    });
    e.preventDefault();
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  private onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (this.props.onKeyDown && this.props.onKeyDown(event)) {
      event.preventDefault();
    }
  };

  private onKeyUp: React.KeyboardEventHandler = (
    event: React.KeyboardEvent
  ) => {
    if (this.props.onKeyUp && this.props.onKeyUp(event)) {
      event.preventDefault();
    }
  };

  public render() {
    return this.props.children({
      rows: this.state.rows,
      focused: this.state.focused,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp
    });
  }
}
