import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../AppSlice'
import recentUpdatesReducer from '../components/slices/recentUpdatesSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        recentUpdates: recentUpdatesReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
