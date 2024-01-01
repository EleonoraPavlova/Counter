//как вариант оформления
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

export const counterReducer = (state = initialState, action: ACTIONTYPE): StateType => {
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

type NoPayloadAction = { type: "INCREMENT_DECREMENT" }

type NumberAction = {
  type: "SET_OUTPUT" | "SET_START" | "SET_MAX",
  payload: number
}

type StringAction = {
  type: "SET_ERROR" | "SET_PRESS",
  payload: string
}

type BooleanAction = {
  type: "DISABLED_RESET" | "DISABLED_INC" | "DISABLED",
  payload: boolean
}


type ACTIONTYPE = NoPayloadAction | BooleanAction | StringAction | NumberAction

export const IncrementDecremenAC = () => {
  return {
    type: "INCREMENT_DECREMENT"
  }
}


export const SetOutputAC = (payload: number) => {
  return {
    type: "SET_OUTPUT",
    payload
  }
}

export const DisabledAC = (payload: boolean) => {
  return {
    type: "DISABLED",
    payload
  }
}

export const DisabledResetAC = (payload: boolean) => {
  return {
    type: "DISABLED_RESET",
    payload
  }
}

export const DisabledIncAC = (payload: boolean) => {
  return {
    type: "DISABLED_INC",
    payload
  }
}

export const SetErrorAC = (payload: string) => {
  return {
    type: "SET_ERROR",
    payload
  }
}


export const SetPressAC = (payload: string) => {
  return {
    type: "SET_PRESS",
    payload
  }
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
  }
}

