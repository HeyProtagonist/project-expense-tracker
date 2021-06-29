import React from 'react'

interface Props {
    children?: JSX.Element
    classnames?: string
    cardName?: string
}

export const Card = ({ children, classnames, cardName }: Props) => {
    return (
        <div
            className={`bg-gray-50 dark:bg-gray-800 w-full rounded-2xl overscroll-x-scroll px-8 py-4 pb-10 ${classnames}`}>
            <p
                className={`h-[10%] my-2 text-center md:text-left ${
                    cardName ? '' : 'hidden'
                }`}>
                {cardName}
            </p>
            <div className='h-[90%] w-full'>{children}</div>
        </div>
    )
}
