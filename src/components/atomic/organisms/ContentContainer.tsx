import React from 'react'

interface Props {
    children: JSX.Element
}

export const ContentContainer = ({ children }: Props) => {
    return (
        <main className='h-[80vh] md:h-[90vh] overflow-y-scroll scrollbar-hide'>
            {children}
        </main>
    )
}
