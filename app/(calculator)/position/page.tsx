import PositionCalculator from '@/app/ui/PositionCalculator'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className='pt-26 md:pt-30 text-white relative px-4 h-full'>
      <PositionCalculator/>
    </div>
    </Suspense>
  )
}

export default page