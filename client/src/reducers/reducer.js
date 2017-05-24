const initialState = {}
export default(state = initialState, action) => {
  switch (action) {
    case 'add':
      return {
        ...state,
        action.item
      }
    default:
      return state
  }
}
