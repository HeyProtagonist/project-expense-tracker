import React from 'react'

interface Props {
    onClick?: () => void
    children: JSX.Element
    classname?: string
}

export const IconWrapper = ({ children, onClick, classname }: Props) => {
    return (
        <a
            className={`bg-gray-100 bg-opacity-80 dark:bg-gray-800 rounded-md w-8 h-8 grid place-items-center cursor-pointer hover:bg-opacity-80 focus:bg-opacity-80 ${classname}`}
            onClick={onClick}>
            {children}
        </a>
    )
}
