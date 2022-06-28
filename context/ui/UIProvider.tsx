import { FC, ReactElement, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
  sideMenuOpen: boolean
}
interface Props {
  children: ReactElement | ReactElement[]
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close SideMenu' })
  }
  const openSideMenu = () => {
    dispatch({ type: 'UI - Open SideMenu' })
  }

  return <UIContext.Provider value={{ ...state, closeSideMenu, openSideMenu }}>{children}</UIContext.Provider>
}
