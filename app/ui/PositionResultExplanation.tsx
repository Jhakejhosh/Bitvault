import React from 'react'

interface ResultValueType {
    id: number
    title: string,
    subHead: string,
    text: string,
}

const resultValue: ResultValueType[] = [
    {
        id: 1,
        title: "Margin Required ($)",
        subHead: "Your actual money used",
        text: "This is what’s locked from your balance. Must be < balance."
    },
    {
        id: 2,
        title: "Max Loss ($)",
        subHead: "Most you can lose",
        text: "Your risk cap. Never lose more than this."
    },
    {
        id: 3,
        title: "Position Size ($)",
        subHead: "Total value of your trade",
        text: "This is how big your bet is. Bigger = more P&L swing."
    }
]

const PositionResultExplanation = () => {
  return (
    <div className='lg:px-40 py-4'>
        <h1 className='text-2xl md:text-3xl'>Result Explanation</h1>
        <div className='mt-8'>
            {
                resultValue.map(input => {
                    const {id, text, title, subHead} = input;
                    return (
                        <div key={id} className='pb-10'>
                            <h1 className='text-[20px] md:text-[22px] font-bold py-2'>{id}. {title}</h1>
                            <i className='font-semibold text-[16px] md:border-l-4 border-white/20 pl-2'>"{subHead}"</i>
                             <p className='text-gray-400 pt-6'>{text}</p>
        
                        </div>
                            )
                        })
                    }
        </div>
    </div>
  )
}

export default PositionResultExplanation