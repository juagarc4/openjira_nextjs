import { createContext } from 'react'

interface ContextProps {
  sidebarmenuOpen: boolean
}

export const UIContext = createContext({} as ContextProps)
