import React from 'react'
import { CryptoTypes, getCryptoData } from '../lib/FetchApi';
import Image from 'next/image';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export const revalidate = 60;

const MarketPageCryptoPrices = async() => {
  const cryptos: CryptoTypes[] = await getCryptoData();
  return (
    <div className='relative md:px-30 lg:px-40'>
        <div className='overflow-x-auto'>
            <table className='min-w-full text-white/85'>
                <thead className='border-b-1 border-gray-700'>
                    <tr className='text-sm'>
                        <th className='py-4 text-left'>#</th>
                        <th className='py-4 text-left px-4'>Coins</th>
                        <th className='py-4 text-right px-4'>Price</th>
                        <th className='py-4 text-right px-4'>24h %</th>
                        <th className='py-4 text-right px-4'>Market Cap</th>
                        <th className='py-4 text-right px-4'>Volume (24h)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cryptos?.map(crypto => {
                            const {id, market_cap, market_cap_rank, name, symbol, image, total_volume, price_change_percentage_24h, current_price} = crypto
                            return (
                                <tr key={id} className='border-b-1 border-gray-800'>
                                    <td className='py-6'>{market_cap_rank}</td>
                                    <td className='py-6 flex gap-3 items-center px-4'>
                                        <Image src={image} width={30} alt={name} height={20}/>
                                        <span>{name}
                                            <span className='text-gray-400 ml-2'>{symbol.toLocaleUpperCase()}</span>
                                        </span>
                                    </td>
                                    <td className='text-right px-4'>${current_price.toLocaleString()}</td>
                                    <td className={`text-right px-4 flex items-center justify-end
                                        ${price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500' }`}>
                                        <span>{price_change_percentage_24h < 0 ? <IoMdArrowDropdown/> : <IoMdArrowDropup/> }</span>
                                        <span>{price_change_percentage_24h.toFixed(1)}%</span>
                                    </td>
                                    <td className='text-right px-4'>${market_cap.toLocaleString()}</td>
                                    <td className='text-right px-4'>${total_volume.toLocaleString()}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MarketPageCryptoPrices