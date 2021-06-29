import React from 'react'
import { Card } from '../atoms/Card'

interface Props {}

const chartMockProgress = [
    {
        chartName: 'Chart 01',
        progressPercent: '75%',
        progressText: 'Your text here',
    },
    {
        chartName: 'Chart 02',
        progressPercent: '50%',
        progressText: 'Your text here',
    },
    {
        chartName: 'Chart 03',
        progressPercent: '96%',
        progressText: 'Your text here',
    },
]

export const ChartProgress = (props: Props) => {
    return (
        <Card classnames='lg:w-[32%] lg:h-[540px]'>
            <div className='flex items-center justify-evenly mt-8 space-x-1 lg:flex-col lg:space-y-12'>
                {chartMockProgress.map(
                    ({ chartName, progressPercent, progressText }) => (
                        <div
                            className='flex flex-col items-center space-y-2'
                            key={Math.random().toString(16)}>
                            <div className='relative w-20 h-20 lg:w-24 lg:h-24 p-1 rounded-full border-8 bg-indigo-600 text-white flex flex-col items-center justify-center border-green-400'>
                                <p className='text-xl font-bold'>
                                    {progressPercent}
                                </p>
                                <p className='text-[8px]'>{progressText}</p>
                                <div className='absolute w-20 h-20 lg:w-24 lg:h-24 rounded-full border-8 bg-tranparent text-white flex flex-col items-center justify-center border-transparent border-t-[#4F46E5] border-l-[#4F46E5]' />
                            </div>
                            <p>{chartName}</p>
                        </div>
                    )
                )}
            </div>
        </Card>
    )
}
