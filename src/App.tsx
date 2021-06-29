import React from 'react'
import { ContentContainer, Footer, Header } from './components/atomic/organisms'
import { useAppSelector } from './redux/hooks'

interface Props {
    children: JSX.Element
}

function App({ children }: Props) {
    const colorMode = useAppSelector((state) => state.app.colorMode)

    return (
        <div
            className={`h-screen caret-indigo-700 subpixel-antialiased ${
                colorMode === 'light' ? 'light' : 'dark'
            }`}>
            <div className='h-screen bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200'>
                <Header />
                <ContentContainer>{children}</ContentContainer>
                <Footer />
            </div>
        </div>
    )
}

export default App
