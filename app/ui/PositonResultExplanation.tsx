import React from 'react'
import { PiDotOutline } from "react-icons/pi";

interface InputValueType {
    id: number
    title: string,
    subHead: string,
    text: string,
    example :string[],
    note: string
}

const inputValues: InputValueType[] = [
    {
        id: 1,
        title: "Trading Balance ($)",
        subHead: "How much money do you have to trade with?",
        text: "This is the total amount of capital in your trading account (e.g., USDT, USD, BTC converted to USD).The calculator uses this to determine how much you can risk.",
        example: [
            'You have $10,000 in your Binance Futures wallet → enter 10000',
            'You only want to use $5,000 → enter 5000'
        ],
        note: "Pro Tip: Never enter your full net worth — only what you're willing to trade."
    },
    {
        id: 2,
        title: "Stop Loss (%)",
        subHead: "At what percentage will you exit if the trade goes against you?",
        text: `Your emebgency exit percentage. If the market hits this level, your position closes to limit losses.`,
        example: [
            'Entry: $60,000 → Stop Loss: $57,000 (you expect max 5% drop)',
            'Entry: $100 → Stop Loss: $95'
        ],
        note: 'Best Practice: Place stop loss below support (for longs) or above resistance (for shorts).'
    },
    {
        id: 3,
        title: "Risk Level (%)",
        subHead: "How much of your account are you willing to lose on this trade?",
        text: "This is the percentage of your balance you’re okay losing if stop loss is hit.Recommended: 1% – 2% per trade (professional risk management).",
        example: [
            'Balance: $10,000',
            'Risk: 1% → Max loss = $100'
        ],
        note: 'Warning: Risking >5% per trade is high-risk and not sustainable long-term.'
    },
    {
        id: 4,
        title: "Leverage (x)",
        subHead: "How much borrowed money do you want to use?",
        text: "Leverage multiplies your position size using exchange margin.",
        example: [
            '5x = $1 controls $5',
            '20x = $1 controls $20'
        ],
        note: 'Danger: Higher leverage = higher reward and higher liquidation risk.'
    }
]

const PositonResultExplanation = () => {
  return (
    <div className='lg:px-40 py-8'>
        <h1 className='text-2xl md:text-3xl'>Input Explanation</h1>
        <div className='mt-8'>
            {
                inputValues.map(input => {
                    const {id, text, title, subHead, example, note} = input;
                    return (
                        <div key={id}>
                            <h1 className='text-[22px] font-bold'>{id}. {title}</h1>
                            <i className='font-bold text-[18px] mt-2 mb-4'>"{subHead}"</i>
                            <p className='text-gray-400'>{text}</p>
                            <div>
                                <h1>Example:</h1>
                                {
                                    example.map(e => {
                                        return(
                                            <p className='flex items-center text-gray-400' key={e}>
                                                <span><PiDotOutline/></span>
                                                {e}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                            <p>{note}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PositonResultExplanation