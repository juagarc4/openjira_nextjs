import { FC, ReactElement, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
  sideMenuOpen: boolean
  isAddingEntry: boolean
}
interface Props {
  children: ReactElement | ReactElement[]
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close SideMenu' })
  }
  const openSideMenu = () => {
    dispatch({ type: 'UI - Open SideMenu' })
  }
  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding })
  }
  return (
    <UIContext.Provider
      value={{
        ...state,
        closeSideMenu,
        openSideMenu,
        setIsAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
