import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
    user?: {
        id: string
        name: string
    }
    colorMode: 'light' | 'dark'
    explore: 'hidden' | 'block'
    menu: 'hidden' | 'block'
}

const initialState: AppState = {
    user: {
        id: Math.random().toString(16),
        name: 'Anguram',
    },
    colorMode: 'light',
    explore: 'hidden',
    menu: 'hidden',
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleExplorerView(state) {
            state.explore = state.explore === 'hidden' ? 'block' : 'hidden'
        },
        toggleColorMode(state) {
            state.colorMode = state.colorMode === 'light' ? 'dark' : 'light'
        },
        toggleMenu(state) {
            state.menu = state.menu === 'hidden' ? 'block' : 'hidden'
        },
    },
})

export const { toggleExplorerView, toggleColorMode, toggleMenu } =
    appSlice.actions
export default appSlice.reducer
