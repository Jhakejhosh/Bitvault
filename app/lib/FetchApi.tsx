import React from 'react'

export interface CryptoTypes {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number,
    total_volume: number,
    price_change_percentage_24h: number,

}

export interface GlobalCryptoTypes {
    active_cryptocurrencies: number,
    markets: number,
    total_market_cap: {
      usd: number
    },
    total_volume: {
      usd: number
    },
    market_cap_percentage: {
      btc: number,
      eth: number
    }
    market_cap_change_percentage_24h_usd: number,
}

type Cache = { cache: 'no-store' }

interface RequestType {
    method: string,
    headers: HeadersInit,
    body: BodyInit|undefined,
}


export const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
export const global_url = 'https://api.coingecko.com/api/v3/global'
export const api_key = process.env.NEXT_PUBLIC_COINGECKO_API_KEY as string
const cache: Cache = {cache: "no-store"}
export const options = {method: 'GET', headers: {'x-cg-demo-api-key': api_key}, body: undefined, ...cache};

//API FOR GLOBAL MARKET DATA
export async function getGlobalData() {
  // During build, skip real API
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build') {
    return { 
      active_cryptocurrencies: 0,
    markets: 1,
    total_market_cap: {
      usd: 0
    },
    total_volume: {
      usd: 0
    },
    market_cap_percentage: {
      btc: 0,
      eth: 0
    },
    market_cap_change_percentage_24h_usd: 0,
    };
  }

  const res = await fetch(global_url, options);
  const text = await res.text();

  try {
    const globalData = JSON.parse(text)
    const global: GlobalCryptoTypes = globalData.data
    return global;
  } catch {
    return { 
    active_cryptocurrencies: 0,
    markets: 1,
    total_market_cap: {
      usd: 0
    },
    total_volume: {
      usd: 0
    },
    market_cap_percentage: {
      btc: 0,
      eth: 0
    },
    market_cap_change_percentage_24h_usd: 0,
     };
  }
}

const crypto: CryptoTypes[] = [
    {
    id: 'bitcoin',
    symbol: "bitcoin",
    name: "bitcoin",
    image: "bitcoin",
    current_price: 0,
    market_cap: 0,
    market_cap_rank: 1,
    total_volume: 0,
    price_change_percentage_24h: 0,
    },
    {
    id: 'ethereum',
    symbol: "ethereum",
    name: "Ethereum",
    image: "ethereum",
    current_price: 0,
    market_cap: 0,
    market_cap_rank: 1,
    total_volume: 0,
    price_change_percentage_24h: 0,
    },
  ]


//API FOR COINS DATA
export async function getCryptoData() {

  // During build, skip real API
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build') {
    return crypto
  }

  const res = await fetch(url, options);
  const text = await res.text();

  try {
    const cryptoData = JSON.parse(text)
    const cryptos: CryptoTypes[] = cryptoData
    return cryptos;
  } catch {
    return crypto
  }
}

