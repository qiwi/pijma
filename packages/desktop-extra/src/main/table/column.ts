export function columnFactory(
  el?: string | number | object,
  mapping?: any,
): any {
  switch (typeof el) {
    case 'string':
      return mapping[el] || { accessor: el }
    case 'number':
      return { width: el }
    case 'object':
      return el
    default:
      throw new Error(`unsupported table column type: ${typeof el}`)
  }
}
