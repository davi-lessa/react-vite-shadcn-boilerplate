import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './reducers/common'

export const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// --- Using:
// import { useDispatch } from 'react-redux'
// import { actions as commonActions } from 'store/reducers/common'

// const dispatch = useDispatch()
// dispatch(cartActions.addItem(itemToCart))
