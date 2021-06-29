import React from 'react'
import { useAppSelector } from '../../../redux/hooks'
import { Card } from '../atoms/Card'

interface Props {}

export const RecentUpdates = (props: Props) => {
    const updatesLog = useAppSelector(state => state.recentUpdates)

    return (
        <Card cardName='Recent Updates'>
            <div className="flex flex-col items-center space-y-6">
                {updatesLog.map(({ timeStamp, message }) => (
                    <div className="dark:bg-gray-900 flex items-center space-x-4 p-2 text-sm rounded-md border border-gray-600" key={Math.random().toString(16)}>
                        <div>{timeStamp}</div>
                        <div className="h-28 overflow-y-scroll">{message}</div>
                    </div>
                ))}
            </div>
        </Card>
    )
}
