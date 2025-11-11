import { useEffect, useState } from 'react';

//type OHLCRow = [number, number, number, number, number]; // [time, open, high, low, close] from API
//type ChartRow = [Date, number, number, number, number]; // [time, low, open, close, high] for charts

interface DataPoint {
  x: number; // timestamp in milliseconds
  y: number; // closing price
}

export function useCoinOHLC(id: string) {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOHLC() {
      try {
        setLoading(true);
        const url = `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=7`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        const apiData: [number, number, number, number, number][] = await response.json();

        // Transform for charts: Reorder to [time, low, open, close, high]
        // Convert time to Date for better x-axis
        const transformedData = apiData.map(([timestamp, , , , close]) => ({
          x: timestamp,
          y: close,
        }));
        setData(transformedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    }

    fetchOHLC();
  }, [id]);

  return { data, loading, error };
}