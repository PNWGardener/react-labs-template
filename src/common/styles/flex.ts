import { CssSize } from '.'

export type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'initial'
  | 'inherit'
export type FlexWrap =
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'
  | 'initial'
  | 'inherit'
export type FlexAlignment = 'flex-start' | 'center' | 'flex-end' | 'stretch'
// export type FlexItemAlignment = FlexAlignment | 'baseline'
export type FlexContentAlignment =
  | FlexAlignment
  | 'space-around'
  | 'space-between'
  | 'space-evenly'

export interface FlexAlignOptions {
  /**
   * justify-content: how to place content within each row or column
   */
  main?: FlexContentAlignment
  /**
   * align-items: how to align items within a row or column
   */
  item?: FlexAlignment
  /**
   * align-content: how to align content between rows or columns
   */
  content?: FlexContentAlignment
}
export interface FlexLayoutOptions {
  direction?: FlexDirection
  wrap?: FlexWrap | boolean
  align?: FlexAlignOptions
}

export interface FlexAlignProperties {
  justifyContent: FlexContentAlignment
  alignContent: FlexContentAlignment
  alignItems: FlexAlignment
}

export interface FlexProperties {
  flex?: string
  flexGrow?: CssSize
  flexShrink?: CssSize
  flexBasis?: CssSize
}

export const flexNone = '0 0 auto'
export const flexAuto = '1 1 auto'
export const flexGrow = '1 1 100%'
export const flexDefault = '1 1 0%'
export const flexNoGrow = '0 1 auto'
export const flexNoShrink = '1 0 auto'

export const flexDefaults: { [key: string]: string } = {
  default: flexDefault,
  none: flexNone,
  auto: flexAuto,
  grow: flexGrow,
  nogrow: flexNoGrow,
  noshrink: flexNoShrink,
}

export const flexWithDefaults = (flexStyles: FlexProperties) => {
  return { ...flexStyles, boxSizing: 'border-box' }
}

export const flex = (props: string | FlexProperties = 'default') => {
  if (typeof props == 'string') {
    const value = props as string
    return flexWithDefaults({ flex: flexDefaults[value] ?? value })
  }

  return flexWithDefaults(props)
}

export const flexLayout = (options: FlexLayoutOptions) => {
  const {
    direction = 'row',
    wrap = false,
    align = { main: 'flex-start', content: 'stretch' },
  } = options

  const flexWrap = (wrap as FlexWrap) || ((wrap as boolean) ? 'wrap' : 'nowrap')

  const {
    main: justifyContent,
    content: alignContent,
    item: alignItems,
  } = align

  const cssProps = {
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: direction,
    flexWrap,
    justifyContent,
    alignContent,
    alignItems: alignItems ?? alignContent,
  }

  return cssProps
}
