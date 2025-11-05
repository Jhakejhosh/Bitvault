import React from 'react'
import { benefits } from '@/public/data/data'

const BenefitCard = () => {
  return (
    <div className='md:flex justify-center items-center text-start gap-4 pt-10 pb-12'>
        {
            benefits.map(benefit => {
                const {id, icon, heading, text, color, bg} = benefit;
                const IconElement = icon;
                return (
                    <div key={id} className='not-last:mb-8 md:not-last:mb-0'>
                        <div className='flex gap-3 justify-center items-start'>
                            <div className={`flex ${bg} rounded-lg`}>
                                <span className={`${color} p-3 text-[18px]`}><IconElement/></span>
                            </div>
                            <div>
                                <h1 className='font-bold mb-2'>{heading}</h1>
                                <p className='text-gray-400 text-sm'>{text}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default BenefitCard