import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { MdReportProblem } from 'react-icons/md'
import {
    IoChatbubbleSharp,
    IoHomeSharp,
    IoMenu,
    IoPieChart,
} from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import { toggleMenu } from '../../../AppSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { IconWrapper } from '../atoms'

interface Props {}

const navigationLinks = [
    {
        name: 'Dashboard',
        icon(classNames: string) {
            return <IoHomeSharp className={classNames} />
        },
        path: '/',
        count: 0,
    },
    {
        name: 'Messages',
        icon(classNames: string) {
            return <IoChatbubbleSharp className={classNames} />
        },
        path: '/messages',
        count: 3,
    },
    {
        name: 'Charts',
        icon(classNames: string) {
            return <IoPieChart className={classNames} />
        },
        path: '/explore',
        count: 0,
    },
    {
        name: 'Profile',
        icon(classNames: string) {
            return <AiOutlineUser className={classNames} />
        },
        path: '/profile',
        count: 0,
    },
    {
        name: 'Report',
        icon(classNames: string) {
            return <MdReportProblem className={classNames} />
        },
        path: '/report',
        count: 0,
    },
]

export const Navigation = (props: Props) => {
    const menuState = useAppSelector((state) => state.app.menu)
    const dispatch = useAppDispatch()
    const getUniq = () => Math.random().toString(16)
    const getLocation = () => {
        const { pathname } = useLocation()
        return pathname
    }

    const toggleMenuBar = () => {
        dispatch(toggleMenu())
    }

    return (
        <div>
            <IconWrapper onClick={toggleMenuBar} classname='md:h-12 md:w-12'>
                <IoMenu className='w-6 h-6 md:w-8 md:h-8' />
            </IconWrapper>

            <div
                className={`${menuState} absolute h-screen w-11/12 sm:w-6/12 md:w-5/12 lg:w-[320px] top-0 left-0 bg-indigo-600 bg-opacity-90 z-10`}>
                <div className='flex items-center h-[10vh] flex-row justify-between px-2 md:justify-between md:px-10 w-9/12 md:w-full lg:w-11/12'>
                    <IconWrapper
                        onClick={toggleMenuBar}
                        classname='md:h-12 md:w-12'>
                        <IoMenu className='w-6 h-6 md:w-8 md:h-8' />
                    </IconWrapper>
                    <div
                        className={`bg-gray-100 bg-opacity-80 dark:bg-gray-800 w-40 grid place-items-center h-8 rounded-md md:h-12`}>
                        <p>Your Logo</p>
                    </div>
                </div>

                <div className='h-4/6 pt-20 pl-20 flex flex-col justify-evenly'>
                    {navigationLinks.map(({ name, path, icon, count }) => (
                        <Link to={path} key={getUniq()}>
                            <div
                                className={`flex items-center text-gray-100 ${
                                    getLocation() === path
                                        ? `text-indigo-300`
                                        : ``
                                }`}>
                                {icon('w-6 h-6 md:w-8 md:h-8')}
                                <div className='md:text-xl mx-4 relative flex items-center'>
                                    <p>{name}</p>
                                    <span
                                        className={
                                            count !== 0
                                                ? 'inline-block'
                                                : 'hidden'
                                        }>
                                        <div className='absolute -top-1 -right-3 md:-right-6 w-4 h-4 md:w-6 md:h-6 rounded-full bg-red-500'>
                                            <p className='text-xs text-center font-semibold md:text-sm'>
                                                {count}
                                            </p>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
