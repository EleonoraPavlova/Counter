export type IncrementDecremenType = ReturnType<typeof IncrementDecremenAC>
export type SetOutputType = ReturnType<typeof SetOutputAC>
export type DisabledType = ReturnType<typeof DisabledAC>
export type DisabledResetType = ReturnType<typeof DisabledResetAC>
export type DisabledIncType = ReturnType<typeof DisabledIncAC>
export type SetErrorType = ReturnType<typeof SetErrorAC>
export type SetPressType = ReturnType<typeof SetPressAC>
export type SetStartType = ReturnType<typeof SetStartAC>
export type SetMaxType = ReturnType<typeof SetMaxAC>


export type ActionCounterType = IncrementDecremenType
  | SetOutputType
  | DisabledType
  | DisabledResetType
  | DisabledIncType
  | SetErrorType
  | SetPressType
  | SetStartType
  | SetMaxType


export type StateType = {
  output: number
  isDisabled: boolean
  isDisabledReset: boolean
  isDisabledInc: boolean
  max: number
  start: number
  errorMessage: string
  pressMessage: string
}
const initialState: StateType = {
  output: 0,
  isDisabled: false, //open
  isDisabledReset: false,
  isDisabledInc: false,
  max: 0,
  start: 0,
  errorMessage: '',
  pressMessage: '',
}

export const counterReducer = (state = initialState, action: ActionCounterType): StateType => {
  switch (action.type) {
    case "INCREMENT_DECREMENT":
      return { ...state, output: state.output }
    case "SET_OUTPUT":
      return { ...state, output: action.payload }
    case "DISABLED":
      return { ...state, isDisabled: action.payload };
    case "DISABLED_RESET":
      return { ...state, isDisabledReset: action.payload };
    case "DISABLED_INC":
      return { ...state, isDisabledInc: action.payload };
    case "SET_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SET_PRESS":
      return { ...state, pressMessage: action.payload };
    case "SET_START":
      return { ...state, start: action.payload };
    case "SET_MAX":
      return { ...state, max: action.payload };
    default: return state
  }
}


export const IncrementDecremenAC = () => {
  return {
    type: "INCREMENT_DECREMENT"
  } as const
}


export const SetOutputAC = (payload: number) => {
  return {
    type: "SET_OUTPUT",
    payload
  } as const
}

export const DisabledAC = (payload: boolean) => {
  return {
    type: "DISABLED",
    payload
  } as const
}

export const DisabledResetAC = (payload: boolean) => {
  return {
    type: "DISABLED_RESET",
    payload
  } as const
}

export const DisabledIncAC = (payload: boolean) => {
  return {
    type: "DISABLED_INC",
    payload
  } as const
}

export const SetErrorAC = (payload: string) => {
  return {
    type: "SET_ERROR",
    payload
  } as const
}


export const SetPressAC = (payload: string) => {
  return {
    type: "SET_PRESS",
    payload
  } as const
}


export const SetStartAC = (payload: number) => {
  return {
    type: "SET_START",
    payload
  } as const
}

export const SetMaxAC = (payload: number) => {
  return {
    type: "SET_MAX",
    payload
  } as const
}

