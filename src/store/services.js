import axios from "axios"
const fakeConnector = axios.create({
  baseURL: "https://fake.com/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function fakeconnector_get_pets_list(action) {
  return fakeConnector.get(`/pets`)
}
export const apiService = { fakeconnector_get_pets_list }
