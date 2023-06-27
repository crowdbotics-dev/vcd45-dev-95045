import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vder_list = createAsyncThunk(
  "vders/api_v1_vder_list",
  async payload => {
    const response = await apiService.api_v1_vder_list(payload)
    return response.data
  }
)
export const api_v1_vder_create = createAsyncThunk(
  "vders/api_v1_vder_create",
  async payload => {
    const response = await apiService.api_v1_vder_create(payload)
    return response.data
  }
)
export const api_v1_vder_retrieve = createAsyncThunk(
  "vders/api_v1_vder_retrieve",
  async payload => {
    const response = await apiService.api_v1_vder_retrieve(payload)
    return response.data
  }
)
export const api_v1_vder_update = createAsyncThunk(
  "vders/api_v1_vder_update",
  async payload => {
    const response = await apiService.api_v1_vder_update(payload)
    return response.data
  }
)
export const api_v1_vder_partial_update = createAsyncThunk(
  "vders/api_v1_vder_partial_update",
  async payload => {
    const response = await apiService.api_v1_vder_partial_update(payload)
    return response.data
  }
)
export const api_v1_vder_destroy = createAsyncThunk(
  "vders/api_v1_vder_destroy",
  async payload => {
    const response = await apiService.api_v1_vder_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vdersSlice = createSlice({
  name: "vders",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vder_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vder_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vder_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vder_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vder_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vder_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vder_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vder_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vder_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vder_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vder_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vder_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vder_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vder_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vder_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vder_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vder_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vder_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vder_list,
  api_v1_vder_create,
  api_v1_vder_retrieve,
  api_v1_vder_update,
  api_v1_vder_partial_update,
  api_v1_vder_destroy,
  slice: vdersSlice
}
