import React from 'react'
import { Card } from '../atoms/Card'

interface Props {}

const teleList = [
    {
        name: 'Lorem Ipsum',
        progress: '98',
    },
    {
        name: 'Lorem Ipsum',
        progress: '50',
    },
    {
        name: 'Lorem Ipsum',
        progress: '20',
    },
    {
        name: 'Lorem Ipsum',
        progress: '45',
    },
    {
        name: 'Lorem Ipsum',
        progress: '30',
    },
    {
        name: 'Lorem Ipsum',
        progress: '80',
    },
    {
        name: 'Lorem Ipsum',
        progress: '39',
    },
    {
        name: 'Lorem Ipsum',
        progress: '65',
    },
]

export const Analytical = (props: Props) => {
    const getUniq = () => {
        return Math.random().toString(16)
    }

    return (
        <Card cardName='Analytical' classnames='lg:w-[65%]'>
            <div>
                {teleList.map(({ name, progress }) => {
                    return (
                        <div
                            className='flex flex-row items-center justify-between w-full my-4 lg:my-2'
                            key={getUniq()}>
                            <div>{name}</div>

                            <div
                                className={`w-[40%] md:w-[70%] lg:w-[80%] h-4 bg-indigo-600 rounded`}></div>

                            <div className="px-4">{`${progress}%`}</div>
                        </div>
                    )
                })}
            </div>
        </Card>
    )
}
