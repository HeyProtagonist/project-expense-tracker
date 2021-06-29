import React from 'react'
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5'
import { toggleColorMode } from '../../../AppSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { IconWrapper } from './IconWrapper'

interface Props {}

export const ColorToggle = (props: Props) => {
    const colorMode = useAppSelector((state) => state.app.colorMode)
    const dispatch = useAppDispatch()

    const toggleMode = () => {
        dispatch(toggleColorMode())
    }

    return (
        <IconWrapper onClick={toggleMode} classname="md:w-10 md:h-10 md:rounded-full">
            {colorMode === 'light' ? (
                <IoMoonSharp className='text-blue-400 md:w-6 md:h-6' />
            ) : (
                <IoSunnySharp className='text-yellow-500 md:w-6 md:h-6' />
            )}
        </IconWrapper>
    )
}
