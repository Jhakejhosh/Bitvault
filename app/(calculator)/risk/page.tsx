import Link from 'next/link';
import React from 'react'
import { PiDotOutline } from "react-icons/pi";
import { tr } from 'zod/locales';

interface RiskType {
    target: string,
    r: string,
    win: string
}

const risks: RiskType[] = [
    {
        target: '$300',
        r: "1:3",
        win: "25%"
    },
    {
        target: '$200',
        r: "1:2",
        win: "34%"
    },
    {
        target: '$120',
        r: "1:1.2",
        win: "46%"
    },
    {
        target: '$80',
        r: "1:0.8",
        win: "56% (Impossible long term)"
    }
]

const page = () => {
  return (
    <div className='pt-26 md:pt-30 text-white relative px-4 h-full md:px-36 lg:px-40 pb-10'>
        <div className='lg:px-40 py-10'>
            <div className='md:border-b-1 border-gray-800 md:text-start text-center'>
                <h1 className='font-bold text-4xl'>Risk Management In Crypto</h1>
                <p className='py-6 md:text-[18px]'><i>The Complete Beginner's Guide</i></p>
            </div>
            <div className='md:border-b-1 border-gray-800 pt-6'>
                <h2 className='font-semibold text-2xl'>Why Risk Management Matters More Than Picking Winners</h2>
                <p className='py-6 text-gray-400'>In crypto, <strong className='text-white'>everyone gets lucky sometimes.</strong> A random meme coin pumps 10x. A friend tips you on a gem.
                  But <strong className='text-white'>only those who manage risk survive long enough to compound gains.</strong>
                </p>
                <p className='font-semibold border-l-4 border-gray-700 px-4'>
                    <i>95% of traders lose money long-term — not because they pick bad coins, but because one bad trade wipes out 10 good ones.</i>
                </p>
                <p className='py-6 text-gray-400'>
                    This guide breaks down risk management into <strong className='text-white'>simple, actionable steps</strong> — perfect for beginners who want to trade like professionals.
                </p>
            </div>

            <div className='md:border-b-1 border-gray-800 py-6'>
                <h2 className='font-semibold text-2xl'>The Golden Rule: Never Risk More Than 1%</h2>
                <p className='py-6 text-gray-400'>
                    The <strong className='text-white'>1% Rule</strong> is the foundation of professional trading:
                </p>
                <p className='border-l-4 border-gray-700 px-4'>
                    <i>"Never risk more than 1% of your total capital on a single trade."</i>
                </p>
                <div className='py-6'>
                    <p className='font-semibold'>Example:</p>
                    <div className='flex items-center gap-4 text-gray-400 py-6'>
                        <span><PiDotOutline/></span>
                        <p>Account: $10,000</p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400'>
                        <span><PiDotOutline/></span>
                        <p>Max risk per trade = $100</p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 pt-6'>
                        <span><PiDotOutline/></span>
                        <p>Risking $1,000 = 10% = too much</p>
                    </div>
                </div>
                <p className='text-gray-400'>
                    <strong className='text-white'>Beginner Tip:</strong> Start with 0.5% risk per trade. It gives you room to learn without blowing up.
                </p>
            </div>

            <div className='md:border-b-1 border-gray-800 py-6'>
                <h2 className='font-semibold text-2xl'>Risk-Reward Ratio: Only Take 2:1 or Better</h2>
                <p className='py-6 text-gray-400'>
                    For every <strong className='text-white'>$1 you risk,</strong> aim to make at 
                    <strong className='text-white'> least $2.</strong>
                </p>
                <div className='py-6'>
                    <p className='font-semibold'>Example:</p>
                    <div className='flex items-center gap-4 text-gray-400 py-6'>
                        <span><PiDotOutline/></span>
                        <p>Risk: $100</p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400'>
                        <span><PiDotOutline/></span>
                        <p>Target: $200+ profit</p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 pt-6'>
                        <span><PiDotOutline/></span>
                        <p>R:R = 1:2 Good</p>
                    </div>
                </div>
                <div className='overflow-x-auto pb-6'>
                    <table className='min-w-full]'>
                    <thead className='border-b-1 border-gray-700'>
                        <tr>
                            <th className='text-left text-[14px] pb-4'>Risk</th>
                            <th className='text-left text-[14px] pb-4 px-4 md:px-12'>Target</th>
                            <th className='text-left text-[14px] pb-4 px-4 md:px-12'>R:R</th>
                            <th className='text-left text-[14px] pb-4 px-4 md:px-12'>Win Rate Needed</th>
                        </tr>
                    </thead>

                    <tbody className='text-gray-400'>
                        {
                            risks.map(risk => {
                                const {target, r, win} = risk;
                                return (
                                    <tr key={target}>
                                        <td className='whitespace-nowrap py-4'>$100</td>
                                        <td className='whitespace-nowrap py-4 px-4 md:px-12'>{target}</td>
                                        <td className='whitespace-nowrap py-4 px-4 md:px-12'>{r}</td>
                                        <td className='whitespace-nowrap py-4 px-4 md:px-12'>{win}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                </div>
                <p className='font-semibold'>
                    Even if you’re right only 40% of the time, a 1:2 R:R makes you profitable.
                </p>
            </div>

            <div className='md:border-b-1 border-gray-800 py-6'>
                <h2 className='font-semibold text-2xl'>7 Deadly Mistakes That Wipe Out Accounts</h2>
                <div className='py-6'>
                    <div className='flex items-center gap-4 text-gray-400 pt-2'>
                        <span><PiDotOutline/></span>
                        <p><strong className='text-white'>Going all-in</strong> on one coin</p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 pt-2'>
                        <span><PiDotOutline/></span>
                        <p><strong className='text-white'>No stop-loss</strong> ("It’ll come back")</p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 pt-2'>
                        <span><PiDotOutline/></span>
                        <p><strong className='text-white'>Averaging down</strong> without a plan</p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 pt-2'>
                        <span><PiDotOutline/></span>
                        <p><strong className='text-white'>Revenge trading</strong> after a loss</p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 pt-2'>
                        <span><PiDotOutline/></span>
                        <p><strong className='text-white'>Using 10x+ leverage</strong> as a beginner</p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 pt-2'>
                        <span><PiDotOutline/></span>
                        <p><strong className='text-white'>FOMO buying</strong> at all-time highs</p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 pt-2'>
                        <span><PiDotOutline/></span>
                        <p><strong className='text-white'>Trading with scared money</strong></p>
                    </div>
                </div>
                <p className='border-l-4 border-gray-700 px-4 font-semibold'>
                    <i>Never trade with money you can’t afford to lose.</i>
                </p>
            </div>

            <div className='md:border-b-1 border-gray-800 pt-6'>
                <h2 className='font-semibold text-2xl'>Leverage: A Double-Edged Sword</h2>
                <p className='py-6 text-gray-400'>Leverage lets you control <strong className='text-white'>$10,000 with $1,000.</strong> A random meme coin pumps 10x. A friend tips you on a gem.
                  Sounds great — until a <strong className='text-white'>10% move wipes you out.</strong>
                </p>
                <p className='font-semibold border-l-4 border-gray-700 px-4 mb-6'>
                    <i>A 5% drop with 20x leverage = 100% loss. Liquidated.</i>
                </p>
            </div>

            <div className='md:border-b-1 border-gray-800 py-6'>
                <h2 className='font-semibold text-2xl'>The Mental Game: Discipline {">"} Knowledge</h2>
                <div className='py-6'>
                    <div className='flex items-center gap-4 text-gray-400 pt-2'>
                        <span><PiDotOutline/></span>
                        <p>Follow your plan — even when emotions scream otherwise</p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 pt-2'>
                        <span><PiDotOutline/></span>
                        <p>Take breaks after<strong className='text-white'> 2 losses in a row</strong></p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 pt-2'>
                        <span><PiDotOutline/></span>
                        <p>Journal every trade: entry, exit, reason, emotions</p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 pt-2'>
                        <span><PiDotOutline/></span>
                        <p>Celebrate<strong className='text-white'> sticking to rules,</strong> not P&L</p>
                    </div>
                    <p className='font-semibold pt-6'>Good Habit:</p>
                </div>
                <p className='border-l-4 border-gray-700 px-4 font-semibold'>
                    <i>Review your trades every Sunday. Ask: “Did I follow my risk rules?”</i>
                </p>
            </div>

            <div className='pt-6'>
                <h2 className='font-semibold text-2xl'>Ready to Trade Like a Pro?</h2>
                <p className='py-6 text-gray-400'>
                    Use our <Link href='/position' className='text-white
                    cursor-pointer hover:font-semibold'>free position size calculator</Link> and start protecting your capital today.
                </p>
                <p className='border-l-4 border-gray-700 px-4'>
                    <i>This guide is for educational purposes only • Always DYOR • Never invest more than you can afford to lose • Past performance is not indicative of future results</i>
                </p>
    
            </div>

        </div>
    </div>
  )
}

export default page