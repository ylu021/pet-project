const initialState = {
  items: []
}

export default(state = initialState, action) => {
  switch (action.type) {
    case 'add':
      let items = [ ...state.items, action.item ]
      console.log('adding items reducer', items)
      return {
        ...state,
        items
      }
    default:
      console.log(state)
      return state
  }
}
