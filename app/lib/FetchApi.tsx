import React from 'react'

export interface CryptoTypes {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number,
    fully_diluted_valuation: number,
    total_volume: number,
    high_24h: number,
    low_24h: number,
    price_change_24h: number,

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

  const res = await fetch(global_url);
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

