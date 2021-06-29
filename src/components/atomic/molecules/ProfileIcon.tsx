import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useAppSelector } from '../../../redux/hooks'

interface Props {}

export const ProfileIcon = (props: Props) => {
    const username = useAppSelector((state) => state.app.user?.name)

    return (
        <div className='flex items-center justify-between w-40 text-gray-100 cursor-pointer'>
            <p className="text-lg font-semibold">Hi, {username}</p>
            <FaUserCircle className='text-gray-100 w-10 h-10 bg-gray-400 rounded-full' />
        </div>
    )
}
