export const ignoreProps =
  (...props: string[]) =>
  (prop: PropertyKey) =>
    props.includes(String(prop))
