

import React from 'react'
import { CryptoTypes, getCryptoData, options, url } from '../lib/FetchApi';
import Image from 'next/image';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Link from 'next/link';

export const revalidate = 60;

const MarketPageCryptoPrices = async() => {

    const cryptos = await getCryptoData();

  /**const [data, setData] = useState<CryptoTypes[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
    useEffect(() => {
    async function fetchCryptoData() {
      try {
        setLoading(true);
        const response = await fetch(
          url,
          options
        );
        if (!response.ok) throw new Error('API error');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch');
      } finally {
        setLoading(false);
      }
    }
        fetchCryptoData()
    }, [data])

    if (loading) return <div>Loading prices...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(data)**/

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
                                <tr className='border-b-1 border-gray-800' key={id}>
                                    <td className='py-6'>{market_cap_rank}</td>
                                    <td>
                                        <Link href={`/market/${id}`} className='py-6 flex gap-2 items-center px-4'>
                                        <Image src={image} width={30} alt={name} height={30}/>
                                        <span>{name}
                                            <span className='text-gray-400 ml-1'>{symbol.toLocaleUpperCase()}</span>
                                        </span></Link>
                                    </td>
                                    <td className='text-right px-4'>${current_price.toLocaleString()}</td>
                                    <td className={`text-right px-4 flex items-center justify-end
                                        ${price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500' } py-6`}>
                                        <span>{price_change_percentage_24h < 0 ? <IoMdArrowDropdown/> : <IoMdArrowDropup/> }</span>
                                        <span>{price_change_percentage_24h&&price_change_percentage_24h.toFixed(1)}%</span>
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