import Chart from '@/app/ui/Chart'
import React from 'react'

const page = async({params,}:{
    params: Promise<{ cryptoId: string }>
}) => {

    const { cryptoId } = await params
    console.log(cryptoId)

  return (
    <div className='pt-26 md:pt-30 text-white relative px-4 pb-12'>
      <div>
        <Chart/>
      </div>
      <div></div>
    </div>
  )
}

export default page