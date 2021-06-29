import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { toggleExplorerView } from '../../../AppSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { IconWrapper } from '../atoms'
import { ColorToggle } from '../atoms/ColorToggle'

interface Props {}

export const Explorer = (props: Props) => {
    const explore = useAppSelector((state) => state.app.explore)
    const dispatch = useAppDispatch()

    const toggleExplore = () => {
        dispatch(toggleExplorerView())
    }

    return (
        <div
            className={`relative flex items-center ${
                explore === 'hidden' ? `w-20 md:w-4/12` : `w-10/12`
            }`}>
            <input
                type='text'
                placeholder='Search'
                className={`bg-gray-100 dark:bg-gray-900 text-gray-400 dark:text-gray-100 w-10/12 md:w-full h-8 md:h-12 rounded-md pl-6 focus-within:text-gray-900 focus:outline-none focus:ring-2 md:block ${explore}`}
            />
            <IconWrapper classname='hidden md:grid absolute right-0 md:h-12 md:w-12 md:rounded-tl-none md:rounded-bl-none'>
                <IoSearchOutline className='text-gray-400 h-5 w-5' />
            </IconWrapper>
            <div className='absolute right-0 flex items-center justify-between w-20 md:hidden'>
                <IconWrapper onClick={toggleExplore} classname='md:hidden'>
                    <IoSearchOutline className='text-gray-400 h-5 w-5' />
                </IconWrapper>
                <ColorToggle />
            </div>
        </div>
    )
}
