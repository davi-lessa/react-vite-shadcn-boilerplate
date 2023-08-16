import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  time: Date.now(),
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTime: (currentState, { payload }) => {
      currentState.time = payload
    },
  },
})

export default commonSlice
export const actions = commonSlice.actions
