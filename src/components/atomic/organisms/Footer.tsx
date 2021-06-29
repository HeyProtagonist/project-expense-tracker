import React from 'react'
import { IoChatbubbleSharp, IoHomeSharp } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { MdExplore } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

interface Props {}

const navigationIcons = [
    {
        name: 'Home',
        icon(classNames: string) {
            return <IoHomeSharp className={classNames} />
        },
        path: '/',
    },
    {
        name: 'Messages',
        icon(classNames: string) {
            return <IoChatbubbleSharp className={classNames} />
        },
        path: '/messages',
    },
    {
        name: 'Explore',
        icon(classNames: string) {
            return <MdExplore className={classNames} />
        },
        path: '/explore',
    },
    {
        name: 'Profile',
        icon(classNames: string) {
            return <AiOutlineUser className={classNames} />
        },
        path: '/profile',
    },
]

export const Footer = (props: Props) => {
    const getUniq = () => Math.random().toString(16)
    const getLocation = () => {
        const { pathname } = useLocation()
        return pathname
    }

    return (
        <div className='bg-blue-600 bg-opacity-80 dark:bg-gray-800 h-[10vh] flex items-center justify-evenly text-gray-100 md:hidden'>
            {navigationIcons.map(({ name, icon, path }) => (
                <Link to={path} key={getUniq()}>
                    <div
                        className={`flex flex-col items-center justify-center w-20 h-[10vh] space-y-1 cursor-pointer ${
                            getLocation() === path ? `text-indigo-600` : ``
                        }`}>
                        {icon('w-6 h-6')}
                        <p className='capitalize mx-1 h-4 font-semibold'>
                            {name}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
