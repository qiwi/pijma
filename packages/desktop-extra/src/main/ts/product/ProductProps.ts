export default interface ProductProps {
  selectorData: {
    items?: Array<any>
    currentItem?: string | Array<any>
  }
  title: string
  onChange?: (value: any) => void
}
