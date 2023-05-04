type DataProps<T> = {
  [K in keyof T as K extends `data-${infer _U}` ? K : never]: T[K]
}

export const getDataProps = <T extends {}>(props: T): DataProps<T> => {
  const dataProps: Record<string, unknown> = {}

  for (const key of Object.keys(props)) {
    if (key.startsWith('data-')) {
      dataProps[key] = props[key as keyof typeof props]
    }
  }

  return dataProps as any
}

export const omitDataProps = <T extends {}>(
  props: T,
): Omit<T, keyof DataProps<T>> => {
  const propsWithoutDataAttrs: Record<string, unknown> = {}

  for (const key of Object.keys(props)) {
    if (!key.startsWith('data-')) {
      propsWithoutDataAttrs[key] = props[key as keyof typeof props]
    }
  }

  return propsWithoutDataAttrs as any
}
