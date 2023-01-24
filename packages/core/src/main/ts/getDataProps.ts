type DataProps<T> = {
  [K in keyof T as K extends `data-${infer _U}` ? K : never]: T[K]
}

export const getDataProps = <T extends {}>(
  props: T,
): {
  data: DataProps<T>
  rest: Omit<T, keyof DataProps<T>>
} => {
  const data: Record<string, unknown> = {}
  const rest: Record<string, unknown> = {}

  for (const key of Object.keys(props)) {
    if (key.startsWith('data-')) {
      data[key] = props[key as keyof typeof props]
    } else {
      rest[key] = props[key as keyof typeof props]
    }
  }

  return { data, rest } as any
}
