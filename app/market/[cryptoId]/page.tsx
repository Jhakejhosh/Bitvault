import BackButton from '@/app/lib/BackButton'
import { getCryptoId } from '@/app/lib/FetchApi'
import TextTruncate from '@/app/lib/TextTruncate'
import Chart from '@/app/ui/Chart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async({params,}:{
    params: Promise<{ cryptoId: string }>
}) => {

    const { cryptoId } = await params
    const crypto_id = await getCryptoId(cryptoId)

    if(!crypto_id) {
      return <div>No data....</div>
    }
    
    const price = Math.floor(crypto_id.market_data.current_price.usd).toLocaleString();
    const percent = crypto_id.market_data.market_cap_change_percentage_24h;
    const high = crypto_id.market_data.high_24h.usd.toLocaleString()
    const low = crypto_id.market_data.low_24h.usd.toLocaleString()
    const market_cap =  Math.floor(crypto_id.market_data.market_cap.usd).toLocaleString()
    const total_volume =  Math.floor(crypto_id.market_data.total_volume.usd).toLocaleString()
    const valuation =  Math.floor(crypto_id.market_data.fully_diluted_valuation.usd).toLocaleString()
    const circulate =  Math.floor(crypto_id.market_data.circulating_supply).toLocaleString()
    const total =  Math.floor(crypto_id.market_data.total_supply).toLocaleString()
    const max =  Math.floor(crypto_id.market_data.max_supply).toLocaleString()
    

  return (
    <div className='pt-26 md:pt-30 text-white relative px-4 pb-12 md:px-30 lg:px-40'>
      <BackButton/>
      <div className='flex justify-center items-center'>
        <div className='md:bg-black/2 md:border-1 border-gray-700 md:gap-4 gap-8
          rounded-md flex justify-between items-center-safe py-2 px-2 md:flex-row flex-col'>
          <div className='flex gap-5 md:gap-3 items-center md:border-r-2 md:border-gray-700 px-4'>
            <figure>
              <Image src={crypto_id.image.small} width={30} alt={crypto_id.name} height={20}/>
            </figure>
            <div>
              <h1 className='flex items-center text-[20px] font-semibold
              gap-1'>{crypto_id.name}<p className='text-gray-400 font-light'>{crypto_id.symbol.toLocaleUpperCase()}</p></h1>
              <p>${price}</p>
            </div>
          </div>
          <div className=''>
          <div className='flex justify-between items-center lg:gap-20 gap-5 lg:px-4'>
            <div className='text-[12px]'>
              <p className='text-gray-500 font-semibold'>24h Change</p>
              <p className={`${percent < 0 ? 'text-red-500' : 'text-green-500' } text-end pt-2`}>
                {percent?.toFixed(2)}%
              </p>
            </div>
            <div className='text-[12px]'>
              <p className='text-gray-500 font-semibold'>24h High</p>
              <p className='text-end pt-2'>
                {high&&high}
              </p>
            </div>
            <div className='text-[12px]'>
              <p className='text-gray-500 font-semibold'>24h Low</p>
              <p className='text-end pt-2'>
                {low}
              </p>
            </div>
            <div className='text-[12px]'>
              <p className='text-gray-500 font-semibold'>24h Volume</p>
              <p className={`${percent < 0 ? 'text-red-500' : 'text-green-500' } text-end pt-2`}>
                {percent?.toFixed(2)}%
              </p>
            </div>
          </div>
          </div>
        </div>
        
      </div>

      {/**SECTION FOR KEY CRYPTO METRICS AND CHART */}
      <div className='flex md:flex-row flex-col-reverse justify-between gap-6 py-8'>
        {/**KEY METRIC */}
        <div className='w-full md:w-[75%] lg:w-[70%] md:border-1 border-gray-700 rounded-md lg:px-4 py-4 md:px-2'>
          <div className='text-sm flex justify-between items-center md:text-[12px] lg:text-sm
           border-b-1 border-gray-700 py-4'>
            <p className='text-gray-400'>Market Cap</p>
            <p className='text-right'>${market_cap}</p>
          </div>
          <div className='text-sm flex justify-between items-center md:text-[12px] lg:text-sm
           border-b-1 border-gray-700 py-4'>
            <p className='text-gray-400'>Fully Diluted Valuation</p>
            <p className='text-right'>${valuation}</p>
          </div>
          <div className='text-sm flex justify-between items-center md:text-[12px] lg:text-sm
           border-b-1 border-gray-700 py-4'>
            <p className='text-gray-400'>24h Trading Volume</p>
            <p className='text-right'>${total_volume}</p>
          </div>
          <div className='text-sm flex justify-between items-center md:text-[12px] lg:text-sm
           border-b-1 border-gray-700 py-4'>
            <p className='text-gray-400'>Circulating Supply</p>
            <p className='text-right'>${circulate}</p>
          </div>
          <div className='text-sm flex justify-between items-center md:text-[12px] lg:text-sm
           border-b-1 border-gray-700 py-4'>
            <p className='text-gray-400'>Total supply</p>
            <p className='text-right'>${total}</p>
          </div>
          <div className='text-sm flex justify-between items-center md:text-[12px] lg:text-sm
           py-4'>
            <p className='text-gray-400'>Max Supply</p>
            <p className='text-right'>${max}</p>
          </div>
        </div>

        {/**CHART SECTION DISPLAY */}
        <div className='w-full'>
          <Chart/>
          
          {/***SECTION FOR DISPLAYING PERCENTAGE CHANGES */}
          <div className='overflow-x-auto relative py-3'>
            <table className='min-w-full text-[12px] md:text-sm border-1 border-gray-800 rounded-md'>
              <thead className='bg-gray-800'>
                <tr>
                  <th className='py-2 text-white/80'>24h</th>
                  <th className='py-2 text-white/80'>7d</th>
                  <th className='py-2 text-white/80'>30d</th>
                  <th className='py-2 text-white/80'>1y</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`text-center py-2 ${crypto_id?.market_data.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500' }`}>{crypto_id?.market_data.price_change_percentage_24h.toFixed(2)}%</td>
                  <td className={`text-center py-2 ${crypto_id?.market_data.price_change_percentage_7d < 0 ? 'text-red-500' : 'text-green-500' }`}>{crypto_id?.market_data.price_change_percentage_7d.toFixed(2)}%</td>
                  <td className={`text-center py-2 ${crypto_id?.market_data.price_change_percentage_30d < 0 ? 'text-red-500' : 'text-green-500' }`}>{crypto_id?.market_data.price_change_percentage_30d.toFixed(2)}%</td>
                  <td className={`text-center py-2 ${crypto_id?.market_data.price_change_percentage_1y < 0 ? 'text-red-500' : 'text-green-500' }`}>{crypto_id?.market_data.price_change_percentage_1y.toFixed(2)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/**SECTION FOR CTYPTO INFO (ABOUT) */}
      <div className='relative'>
        <h1 className='md:text-center text-[20px] font-semibold pb-3
        text-white/80'>About {crypto_id?.name} ({crypto_id?.symbol.toLocaleUpperCase()})</h1>
        <TextTruncate text={crypto_id?.description.en ? crypto_id?.description.en : `No description. You can visit coingecko to know more about ${crypto_id?.name}`}/>
        <div className='py-6 text-sm flex justify-center items-center gap-4'>
          <Link href={crypto_id?.links.homepage[0]} className='text-white/80 bg-gray-800 px-6 py-2
          rounded-sm hover:text-white'>{crypto_id?.name.toLocaleLowerCase()}.org</Link>
          <Link href={crypto_id?.links.whitepaper} className='text-white/80 bg-gray-800 px-6 py-2
          rounded-sm hover:text-white'>Whitepaper</Link>
        </div>
      </div>
    </div>
  )
}

export default page
