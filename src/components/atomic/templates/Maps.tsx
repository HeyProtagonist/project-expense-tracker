import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { Card } from '../atoms/Card'

interface Props {}

const x = [
    {
        type: 'a',
        axis: 'top-[30%] left-[60%]',
    },
    {
        type: 'b',
        axis: 'top-[50%] left-[70%]',
    },
    {
        type: 'b',
        axis: 'top-[10%] left-[30%]',
    },
    {
        type: 'a',
        axis: 'top-[70%] left-[80%]',
    },
]

export const Maps = (props: Props) => {
    return (
        <Card cardName='Maps'>
            <div>
                <div className='relative'>
                    <img
                        src='./images/world-map.svg'
                        alt='Map'
                        className='text-gray-800 dark:bg-gray-50 dark:bg-opacity-80 rounded-lg my-4'
                    />
                    <div className='absolute top-0 left-0 w-full h-full'>
                        {x.map(({ type, axis }) => (
                            <IoLocationSharp
                                key={Math.random().toString(16)}
                                className={`w-6 h-6 absolute ${axis} ${
                                    type === 'a'
                                        ? 'text-indigo-600'
                                        : 'text-green-600'
                                }`}
                            />
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-between space-x-6'>
                    <a
                        target='_blank'
                        className='p-2 bg-gray-800 bg-opacity-20 dark:bg-opacity-100 rounded-md text-indigo-600 font-semibold hover:bg-opacity-10 focus:ring-4 ring-offset-2 ring-offset-gray-200 dark:ring-offset-gray-800 text-[8px] sm:text-base'
                        href='https://www.vecteezy.com/members/rightmeow2'>
                        rightmeow2 🎨
                    </a>
                    <div className='flex items-center justify-between space-x-6'>
                        <div className='flex items-center justify-between'>
                            <IoLocationSharp className='w-6 h-6 text-indigo-600' />
                            <p>Type A</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <IoLocationSharp className='w-6 h-6 text-green-600' />
                            <p>Type B</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
