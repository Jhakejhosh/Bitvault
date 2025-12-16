"use client"

import React, {useState} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import type { ChartOptions } from 'chart.js';
import { useCoinOHLC } from '../lib/hooks/useCoinOHLC'
import GoogleChart from './GoogleChart';
import { Line } from 'react-chartjs-2';


// Register Chart.js components (do this once)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale
);

type coinId = {
  id: string
}



const Chart = (Id: coinId) => {
  const {id} = Id

  console.log(id)

  const { data: ohlcData, loading, error } = useCoinOHLC(id);

  // Prepare data for charts
  const data = {
    datasets: [
      {
        label: `${id.toUpperCase()} Price Chart`,
        data: ohlcData,
        borderColor: '#10b981',       // emerald green
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,                 // smooth curve
        pointRadius: 1,
        pointHoverRadius: 6,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' as const },
      title: {
        display: true,
        text: `${id.toUpperCase()} Price - Last 7 Days`,
        font: { size: 18 },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const price = context.parsed.y;
            return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: 'time',
        time: { unit: 'day' as const },
        title: { display: true, text: 'Date' },
      },
      y: {
        title: { display: true, text: `Price Chart` },
        ticks: {
          callback: (value: any) => `$${value.toLocaleString()}`,
        },
      },
    },
  };
  
  if (loading) return <div className="p-10 text-center">Loading Chart...</div>;
  if (error) return <div className="p-10 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="w-full h-[400px] bg-transparent rounded-lg shadow-lg p-6">
        <Line data={data} options={options}/>
      </div>
  )
}

export default Chart