import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUser: null,
  erorr: null,
  loading: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true
    },
    signInSuccess: (state, action) => {
      (state.currentUser = action.payload),
        (state.erorr = null),
        (state.loading = false)
    },
    signInFailure: (state, action) => {
      (state.erorr = action.payload),
    (state.loading = false)
    },
  },
})

export const { signInFailure, signInStart, signInSuccess } = userSlice.actions
export default userSlice.reducer
