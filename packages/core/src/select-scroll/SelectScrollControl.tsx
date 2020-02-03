import React, {createRef} from 'react'
import RenderChild from '../RenderChild'
import {ItemWithRef} from './SelectScrollItemControl'
import {SelectScrollItem} from '../'

export interface SelectScrollControlProps {
  items: SelectScrollItem[][]
  selected?: number[]
  onSelect?: (values: number[]) => void
  children: RenderChild<{
    items: ItemWithRef[][]
    onSelect: (item: ItemWithRef, index: number) => void
    onSubmit: () => void
  }>
}

export interface SelectScrollControlState {
  items: ItemWithRef[][]
}

export class SelectScrollControl extends React.Component<SelectScrollControlProps, SelectScrollControlState> {

  constructor(props: SelectScrollControlProps) {
    super(props)
    const selected = props.selected || new Array(props.items.length)
    this.state = {
      items: this.props.items.map((item, index) => item.map(list => ({
        ...list,
        ref: createRef(),
        selected: list.value === selected[index],
      }))),
    }
  }

  private onSelect = (selectedItem: ItemWithRef, index: number) => {
    this.setState(state => ({
      items: state.items.map((item, key) => key === index
        ? item.map(list => ({
          ...list,
          selected: list.value === selectedItem.value,
        }))
        : item,
      ),
    }))
  }

  private onSubmit = () => {
    if (this.props.onSelect) {
      this.props.onSelect(this.state.items.map(item => item.find(listItem => listItem.selected)!.value))
    }
  }

  public render() {
    const {items} = this.state
    return this.props.children({
      items,
      onSelect: this.onSelect,
      onSubmit: this.onSubmit,
    })
  }

}
