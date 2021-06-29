import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type RecentUpdatesState = { timeStamp: string; message: string }[]

const initialState: RecentUpdatesState = [
    {
        timeStamp: '01/01/1970',
        message:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aliquid dicta provident ratione atque praesentium. Porro ipsum quod quas aperiam. Quae unde quaerat, quasi assumenda adipisci qui odit perferendis quos iste debitis voluptas in? Maiores accusamus, voluptatem incidunt molestias saepe minima cum quaerat sit esse minus tempora! Explicabo, obcaecati impedit?',
    },
    {
        timeStamp: '01/01/1970',
        message:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aliquid dicta provident ratione atque praesentium. Porro ipsum quod quas aperiam. Quae unde quaerat, quasi assumenda adipisci qui odit perferendis quos iste debitis voluptas in? Maiores accusamus, voluptatem incidunt molestias saepe minima cum quaerat sit esse minus tempora! Explicabo, obcaecati impedit?',
    },
]

const recentUpdatesSlice = createSlice({
    name: 'recentUpdates',
    initialState,
    reducers: {},
})

export const {} = recentUpdatesSlice.actions
export default recentUpdatesSlice.reducer
