import React from 'react'

const page = async({params,}:{
    params: Promise<{ cryptoId: string }>
}) => {

    const { cryptoId } = await params
    console.log(cryptoId)

  return (
    <div className='pt-26 md:pt-30 text-white relative px-4'>page {cryptoId}</div>
  )
}

export default page