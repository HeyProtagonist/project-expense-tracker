import React from 'react'
import {
    Analytical,
    AverageCharts,
    Calculation,
    ChartProgress,
    Maps,
    RecentUpdates,
} from '../components/atomic/templates'
import { useAppSelector } from '../redux/hooks'

interface Props {}

export const Home = (props: Props) => {
    const menu = useAppSelector((state) => state.app.menu)

    return (
        <div className={`flex flex-col py-10 px-2 items-center`}>
            <div>
                <p className='capitalize text-4xl font-semibold first-letter:text-indigo-600 first-letter:text-5xl tracking-wide w-[80vw]'>
                    Overview
                </p>
            </div>
            <div className='w-[100%] lg:w-[90vw] mt-6'>
                <div className='lg:hidden flex flex-col justify-center space-y-10'>
                    <AverageCharts />
                    <Calculation />
                    <Maps />
                    <Analytical />
                    <ChartProgress />
                    <RecentUpdates />
                </div>
                <div className='hidden lg:flex justify-evenly w-full flex-wrap'>
                    <div className='w-[53%] h-[100%] space-y-4'>
                        <AverageCharts />
                        <Maps />
                    </div>
                    <div className='w-[43%] h-[100%] space-y-4'>
                        <Calculation />
                        <div className='flex justify-between items-center'>
                            <Analytical />
                            <ChartProgress />
                        </div>
                        <RecentUpdates />
                    </div>
                </div>
            </div>
        </div>
    )
}
