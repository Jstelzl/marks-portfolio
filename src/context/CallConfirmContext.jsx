import { createContext, useContext } from 'react'

export const CallConfirmContext = createContext(null)

export function useCallConfirm() {
  const context = useContext(CallConfirmContext)
  return context
}
