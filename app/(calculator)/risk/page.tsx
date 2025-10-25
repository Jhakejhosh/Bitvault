import React from 'react'
import { PiDotOutline } from "react-icons/pi";

const page = () => {
  return (
    <div className='pt-26 md:pt-30 text-white relative px-4 h-full md:px-36 lg:px-40'>
        <div className='lg:px-40 py-4'>
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
                    <strong className='text-white'>least $2.</strong>
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
                <p className='font-semibold'>
                    Even if you’re right only 40% of the time, a 1:2 R:R makes you profitable.
                </p>
            </div>
        </div>
    </div>
  )
}

export default page