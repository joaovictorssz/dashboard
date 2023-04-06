'use client'

import React from 'react'
import {Bar} from 'react-chartjs-2'
import {useState, useEffect} from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

type chartData = {
    labels: string[] | {}[]
    datasets: {
        label: string,
        data:  number[],
        borderColor: string,
        backgroundColor: string
    }[]
}


type chartOptions = {
    plugins: {
        legend: {
            position: string
        },
        title:{
            display: boolean,
            text: string
        }
    },
    maintainAscpectRatio: boolean,
    responsive: true
}

export default function BarChart() {

    const [chartData, setChartData] = useState<chartData>()
    const [chartOptios, setChartOptios] = useState<any>()

    useEffect(()=>{
        setChartData({
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: '$ Sales',
                data: [1000, 200, 300, 400, 500, 600, 700],
                backgroundColor: '#68c3eb',
                borderColor:  '#f4f4f4'
            }]
        })

        setChartOptios({
            plugins:{
                legend:{
                    position:  'top'
                }, 
                title:{
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAscpectRatio: false,
            responsive: true
        })
    }, [])
  return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg dark:border-slate-700 dark:bg-slate-700 bg-white '>
        {
            chartData ? <Bar data={chartData} options={chartOptios}/> : <></>
        }
    </div>
  )
}
