import React from 'react'
import { Card } from '../atoms/Card'
import { Bar } from 'react-chartjs-2'

interface Props {}

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: 'Team A',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#34D399',
        },
        {
            label: 'Team B',
            data: [2, 3, 20, 5, 1, 4],
            backgroundColor: '#4F46E5',
        },
    ],
}

const options = {
    scales: {
        yAxes: [
            {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
        xAxes: [
            {
                stacked: true,
            },
        ],
    },
}

export const AverageCharts = (props: Props) => {
    return (
        <Card cardName='Average Charts' classnames='lg:h-[440px] py-4'>
            <Bar type={'bar'} data={data} options={options} />
        </Card>
    )
}
