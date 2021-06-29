import React from 'react'

interface Props {}

export const _404_ = (props: Props) => {
    return (
        <div className='grid place-items-center h-full w-full bg-blue-200 dark:bg-blue-600 dark:bg-opacity-60'>
            <img
                src='./images/404.svg'
                alt='404 Error'
                className='scale-[100%]'
            />
            <a
                target='_blank'
                className='p-2 bg-gray-800 bg-opacity-20 dark:bg-opacity-100 rounded-md text-indigo-600 font-semibold hover:bg-opacity-10 focus:ring-4 ring-offset-2 ring-offset-gray-200 dark:ring-offset-gray-800'
                href='https://www.vecteezy.com/members/dollyheidi'>
                🎨 dollyheidi
            </a>
        </div>
    )
}
