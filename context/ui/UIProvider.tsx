import { FC, ReactElement, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
  sidemenuOpen: boolean
}
interface Props {
  children: ReactElement | ReactElement[]
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  return <UIContext.Provider value={{ sidemenuOpen: false }}>{children}</UIContext.Provider>
}
