export type ActionType = { type: string }
export type Action<Type extends string, Payload = unknown> = {
  type: Type
} & Payload

export type ActionDispatch<Action extends ActionType> = (action: Action) => void

