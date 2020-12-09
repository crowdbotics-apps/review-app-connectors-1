import * as types from "./constants"
export const fakeconnector_get_pets_list = () => ({
  type: types.FAKECONNECTOR_GET_PETS_LIST
})
export const fakeconnector_get_pets_listSucceeded = (response, starter) => ({
  type: types.FAKECONNECTOR_GET_PETS_LIST_SUCCEEDED,
  response,
  starter
})
export const fakeconnector_get_pets_listFailed = (error, starter) => ({
  type: types.FAKECONNECTOR_GET_PETS_LIST_FAILED,
  error,
  starter
})
