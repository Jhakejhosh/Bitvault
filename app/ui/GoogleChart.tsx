'use client';

import { Chart } from 'react-google-charts';
import { useEffect, useState } from 'react';

type ChartType = 'CandlestickChart' | 'LineChart';

interface ChartProps {
  chartType: ChartType;
  data: any[][];
  options?: object;
  width?: string;
  height?: string;
};

export default function GoogleChart({
  chartType,
  data,
  options,
  width = '100%',
  height = '400px',
}: ChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="flex justify-center items-center h-64">Loading chart...</div>;
  }

  return (
    <div className="w-full">
      <Chart
        chartType={chartType}
        data={data}
        options={options}
        width={width}
        height={height}
        chartWrapperParams={{ view: { columns: [0, 1, 2, 3, 4] } }} // For candlestick column selection
      />
    </div>
  );
}