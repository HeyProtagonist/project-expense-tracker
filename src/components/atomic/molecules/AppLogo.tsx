import React from 'react'
import { useAppSelector } from '../../../redux/hooks'

interface Props {
    classnames?: ``
}

export const AppLogo = (props: Props) => {
    const isExloperOpen = () => {
        return useAppSelector((state) => state.app.explore) === 'block'
            ? true
            : false
    }

    return (
        <div
            className={`bg-gray-100 bg-opacity-80 dark:bg-gray-800 w-40 grid place-items-center h-8 rounded-md md:hidden ${
                isExloperOpen() ? 'hidden' : 'block'
            }`}>
            <p>Your Logo</p>
        </div>
    )
}
