import React from 'react'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { IoStar } from 'react-icons/io5'
import { IoDownloadSharp } from 'react-icons/io5'
import { Card } from '../atoms/Card'

interface Props {}

const l = [
    {
        name: 'Earnings',
        icon(c: string) {
            return <HiOutlineCurrencyDollar className={c} />
        },
        count: '000,000',
        note: 'Lorem Ipsum 🥱',
    },
    {
        name: 'Downloads',
        icon(c: string) {
            return <IoDownloadSharp className={c} />
        },
        count: '000',
        note: 'Lorem Ipsum 🥱',
    },
    {
        name: 'Favourites',
        icon(c: string) {
            return <IoStar className={c} />
        },
        count: '000',
        note: 'Lorem Ipsum 🥱',
    },
]

export const Calculation = (props: Props) => {
    return (
        <Card cardName='Calculation' classnames='lg:h-[240px]'>
            <div className='flex items-center justify-between h-full'>
                {l.map(({ name, icon, count, note }) => (
                    <div
                        className='flex flex-col items-center justify-between space-y-2'
                        key={Math.random().toString(16)}>
                        <div>
                            <p className='text-gray-500 font-semibold'>
                                {name}
                            </p>
                        </div>
                        {icon('w-14 h-14 text-indigo-600')}
                        <div>
                            <p className='text-green-500 font-semibold md:text-3xl'>
                                {count}
                            </p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-[8px] md:text-sm'>{`*${note}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}
