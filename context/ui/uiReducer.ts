import { UIState } from './'

type UIActionType =
  | { type: 'UI - Open SideMenu' }
  | { type: 'UI - Close SideMenu' }
  | { type: 'UI - Set isAddingEntry'; payload: boolean }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open SideMenu':
      return {
        ...state,
        sideMenuOpen: true,
      }
    case 'UI - Close SideMenu':
      return {
        ...state,
        sideMenuOpen: false,
      }
    case 'UI - Set isAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload,
      }
    default:
      return state
  }
}
