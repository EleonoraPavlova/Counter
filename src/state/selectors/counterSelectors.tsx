
import { AppRootState } from "../store";

export const outputSelector = (state: AppRootState): number => state.counter.output
export const isDisabledSelector = (state: AppRootState): boolean => state.counter.isDisabled
export const isDisabledResetSelector = (state: AppRootState): boolean => state.counter.isDisabledReset
export const isDisabledIncSelector = (state: AppRootState): boolean => state.counter.isDisabledInc
export const maxSelector = (state: AppRootState): number => state.counter.max
export const startSelector = (state: AppRootState): number => state.counter.start
export const errorMessageSelector = (state: AppRootState): string => state.counter.errorMessage
export const pressMessageSelector = (state: AppRootState): string => state.counter.pressMessage
