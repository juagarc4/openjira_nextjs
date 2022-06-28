import { UIState } from './'

type UIActionType = { type: 'UI - Open SideMenu' } | { type: 'UI - Close SideMenu' }

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

    default:
      return state
  }
}
