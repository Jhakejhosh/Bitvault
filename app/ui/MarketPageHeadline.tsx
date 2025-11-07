

import React from 'react'
import { getGlobalData, global_url, GlobalCryptoTypes, options } from '../lib/FetchApi'
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";

export const revalidate = 60;

const MarketPageHeadline = async() => {

  //const [global, setData] = useState<GlobalCryptoTypes | null>(null);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState<string | null>(null);

  const global: GlobalCryptoTypes = await getGlobalData()

  //const data = await fetch(global_url, options);
  //const text = await data.text();
  //const globalData = JSON.parse(text)
  //const global: GlobalCryptoTypes = globalData.data

  /**useEffect(() => {
    async function fetchCoinData() {
      try {
        setLoading(true);
        const response = await fetch(
          global_url,
          options
        );
        if (!response.ok) throw new Error('API error');
        const result = await response.json();
        const data = result.data
        setData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch');
      } finally {
        setLoading(false);
      }
    }

    fetchCoinData();
  }, []);**/

  if (!global) {
    return global
  }
  if(!global.data.active_cryptocurrencies) {
    return global.data.active_cryptocurrencies = 0
  }
  
    
  const market_cap = Math.floor(global.data.total_market_cap.usd).toLocaleString();
  const volume = Math.floor(global.data.total_volume.usd).toLocaleString();
  const btc = global.data.market_cap_percentage.btc.toFixed(1)
  const eth = global.data.market_cap_percentage.eth.toFixed(1)
  const cap_percent = global.data.market_cap_change_percentage_24h_usd

  return (
    <div className='relative md:px-30 lg:px-40'>
      <div className='text-center'>
        <h1 className='text-2xl font-semibold md:text-3xl'>Cryptocurrency Prices by Market Cap</h1>
        <p className='text-gray-400
        py-2'>Track the real-time prices, market capitalization, and 24-hour trading volume for the top cryptocurrencies.🚀</p>
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-4 my-6'>
        <div className='border-1 border-gray-700 rounded-[12px] py-4 md:py-6 px-4 w-full'>
          <h2 className='text-[20px] font-semibold mb-1'>${market_cap}</h2>
          <div className='text-gray-400 flex items-center gap-2'>
            Market Cap 
            <p className={`${cap_percent < 0 ? 'text-red-500' : 'text-green-500' } flex items-center`}>
              {cap_percent.toFixed(1)}%
              <span>{cap_percent < 0 ? <MdOutlineArrowDropDown/> : <MdOutlineArrowDropUp/> }</span>
            </p>
          </div>
        </div>

        <div className='border-1 border-gray-700 rounded-[12px] py-4 md:py-6 px-4 w-full'>
          <h2 className='text-[20px] font-semibold mb-1'>${volume}</h2>
          <div className='text-gray-400 flex items-center gap-2'>
            24h Trading Volume
          </div>
        </div>

        <div className='border-1 border-gray-700 rounded-[12px] py-4 md:py-6 px-4 w-full'>
          <h2 className='text-[20px] font-semibold mb-1 flex gap-4'><p>BTC {btc}%</p>  ETH {eth}%</h2>
          <div className='text-gray-400 flex items-center gap-2'>
            Dominance
          </div>
        </div>

        <div className='border-1 border-gray-700 rounded-[12px] py-4 md:py-6 px-4 w-full flex justify-between items-center'>
          <div>
            <h1 className='text-[20px] font-semibold mb-1'>{global.data.active_cryptocurrencies.toLocaleString()}</h1>
            <p className='text-gray-400 flex items-center gap-2'>Coins</p>
          </div>
          <div className='text-end'>
            <h1 className='text-[20px] font-semibold mb-1'>{global.data.markets.toLocaleString()}</h1>
            <p className='text-gray-400 flex items-center gap-2'>Exchanges</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MarketPageHeadline