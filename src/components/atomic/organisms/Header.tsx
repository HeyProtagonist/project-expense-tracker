import React from 'react'
import { ColorToggle } from '../atoms/ColorToggle'
import { AppLogo, Explorer } from '../molecules'
import { ProfileIcon } from '../molecules/ProfileIcon'
import { Navigation } from './Navigation'

interface Props {}

export const Header = (props: Props) => {
    return (
        <header className='h-[10vh] lg:h-[10vh] bg-blue-600 bg-opacity-60 flex flex-row items-center justify-between px-2 md:justify-between md:px-10'>
            <Navigation />
            <AppLogo />
            <Explorer />
            <div className='items-center justify-between hidden md:flex w-[220px]'>
                <ProfileIcon />
                <ColorToggle />
            </div>
        </header>
    )
}
