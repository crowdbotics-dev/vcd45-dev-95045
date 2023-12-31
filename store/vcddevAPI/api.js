import axios from "axios"
const vcddevAPI = axios.create({
  baseURL: "https://vcd45-dev-95045.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return vcddevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return vcddevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_nbg_list(payload) {
  return vcddevAPI.get(`/api/v1/nbg/`)
}
function api_v1_nbg_create(payload) {
  return vcddevAPI.post(`/api/v1/nbg/`, payload.data)
}
function api_v1_nbg_retrieve(payload) {
  return vcddevAPI.get(`/api/v1/nbg/${payload.id}/`)
}
function api_v1_nbg_update(payload) {
  return vcddevAPI.put(`/api/v1/nbg/${payload.id}/`, payload.data)
}
function api_v1_nbg_partial_update(payload) {
  return vcddevAPI.patch(`/api/v1/nbg/${payload.id}/`, payload.data)
}
function api_v1_nbg_destroy(payload) {
  return vcddevAPI.delete(`/api/v1/nbg/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return vcddevAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_vder_list(payload) {
  return vcddevAPI.get(`/api/v1/vder/`)
}
function api_v1_vder_create(payload) {
  return vcddevAPI.post(`/api/v1/vder/`, payload.data)
}
function api_v1_vder_retrieve(payload) {
  return vcddevAPI.get(`/api/v1/vder/${payload.id}/`)
}
function api_v1_vder_update(payload) {
  return vcddevAPI.put(`/api/v1/vder/${payload.id}/`, payload.data)
}
function api_v1_vder_partial_update(payload) {
  return vcddevAPI.patch(`/api/v1/vder/${payload.id}/`, payload.data)
}
function api_v1_vder_destroy(payload) {
  return vcddevAPI.delete(`/api/v1/vder/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return vcddevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return vcddevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return vcddevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return vcddevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return vcddevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return vcddevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return vcddevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return vcddevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return vcddevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return vcddevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return vcddevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_nbg_list,
  api_v1_nbg_create,
  api_v1_nbg_retrieve,
  api_v1_nbg_update,
  api_v1_nbg_partial_update,
  api_v1_nbg_destroy,
  api_v1_signup_create,
  api_v1_vder_list,
  api_v1_vder_create,
  api_v1_vder_retrieve,
  api_v1_vder_update,
  api_v1_vder_partial_update,
  api_v1_vder_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
