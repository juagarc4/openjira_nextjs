import { UIState } from './'

type UIActionType =
  | { type: 'UI - Open SideMenu' }
  | { type: 'UI - Close SideMenu' }
  | { type: 'UI - Set isAddingEntry'; payload: boolean }
  | { type: 'UI - Start Dragging' }
  | { type: 'UI - End Dragging' }

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
    case 'UI - Start Dragging':
      return {
        ...state,
        isDragging: true,
      }
    case 'UI - End Dragging':
      return {
        ...state,
        isDragging: false,
      }
    default:
      return state
  }
}
