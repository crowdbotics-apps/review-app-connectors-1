import * as types from "./constants"

const initialState = { fakeConnector: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.FAKECONNECTOR_GET_PETS_LIST:
    case types.FAKECONNECTOR_GET_PETS_LIST_SUCCEEDED:
    case types.FAKECONNECTOR_GET_PETS_LIST_FAILED:
      return Object.assign({}, state, {
        fakeConnector: [...state.fakeConnector, action.response]
      })
    default:
      return state
  }
}
