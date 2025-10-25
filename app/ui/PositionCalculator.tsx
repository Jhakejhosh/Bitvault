"use client"
import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import PositonInputExplanation from './PositonInputExplanation';
import PositionResultExplanation from './PositionResultExplanation';

const InputSchema = z.object(
        {
            balance: z.coerce.number<number>().positive("Trading balace must be > 0"),
            stopLoss: z.coerce.number<number>(),
            riskLevel: z.coerce.number<number>().positive("Risk level must be > 0"),
            leverage: z.coerce.number<number>().min(1, 'Min leverage must be 1x').max(150, "Max leverage must be 150x")
        }
    );

type Input = z.infer<typeof InputSchema>

interface ResultTypes {
    positionSize: string,
    marginRequired: string,
    maxLoss: string
}

const PositionCalculator = () => {

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<Input>({
        resolver: zodResolver(InputSchema)
    })

    const [results, setResults] = useState<ResultTypes>()


    const handleOnSubmit:SubmitHandler<Input> = async(data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Submitted:", data);
        const {balance, riskLevel, stopLoss, leverage} = data;

        const riskAmount = balance * (riskLevel)
        //Position size 
        const positionSize = riskAmount/stopLoss

        //Margin required
        const marginRequired = positionSize/leverage

        //Max loss
        const maxLoss = riskAmount/100

        setResults({
            positionSize: positionSize.toFixed(2),
            marginRequired: marginRequired.toFixed(2),
            maxLoss: maxLoss.toFixed(2)
        })


    }

  return (
    <div className='relative md:px-30 lg:px-40'>
        <h1 className='text-center text-2xl md:text-3xl'>Position Size Calculator</h1>
        <div className='my-8 md:flex justify-center gap-8 lg:px-40'>
            <form onSubmit={handleSubmit(handleOnSubmit)} className='flex-1'>
                <div className='mt-4'>
                    <label className='text-sm'>Trading balance ($)</label>
                    <input placeholder='$100' className='border-1 border-gray-600 rounded-md
                    w-full py-2 px-4 mt-2 outline-0' type='number' {...register("balance")} step='0.01'/>
                    {errors.balance && (
                     <p className="mt-1 text-sm text-red-600">{errors.balance.message}</p>
                     )}
                </div>
                <div className='mt-4'>
                    <label className='text-sm'>Stop-loss (%)</label>
                    <input placeholder='0.50' className='border-1 border-gray-600 rounded-md
                    w-full py-2 px-4 mt-2 outline-0' type='number' {...register("stopLoss")} step='0.01' max='100'/>
                    {errors.stopLoss && (
                     <p className="mt-1 text-sm text-red-600">{errors.stopLoss.message}</p>
                     )}
                </div>
                <div className='mt-4'>
                    <label className='text-sm'>Risk level (%)</label>
                    <input placeholder='3%' className='border-1 border-gray-600 rounded-md
                    w-full py-2 px-4 mt-2 outline-0' type='number' {...register("riskLevel")} step='0.1' max='100'/>
                    {errors.riskLevel && (
                     <p className="mt-1 text-sm text-red-600">{errors.riskLevel.message}</p>
                     )}
                </div>
                <div className='mt-4'>
                    <label className='text-sm'>Leverage (x)</label>
                    <input placeholder='1x' className='border-1 border-gray-600 rounded-md
                    w-full py-2 px-4 mt-2 outline-0' type='number' {...register("leverage")} step='0.1'/>
                    {errors.leverage && (
                     <p className="mt-1 text-sm text-red-600">{errors.leverage.message}</p>
                     )}
                </div>
            
                <button type='submit' className='bg-gradient-to-tr from-blue to-purple
                py-2 px-4 rounded-md my-4 cursor-pointer' disabled={isSubmitting}>
                    {isSubmitting ? "Calculating..." : "Calculate"}
                </button>
            </form>
            <div className='py-4 flex-1 border-1 border-gray-700 rounded-md p-4'>
                <p className='text-lg'>Results</p>
                <div className='w-full'>
                    <div className='mt-4'>
                        <p className='text-sm mb-2'>Margin Required</p>
                        <div className='border-1 border-gray-700 rounded-md w-full
                        py-2 px-4 mt-2'>${results?.marginRequired}</div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm mb-2'>Max Loss ($)</p>
                        <div className='border-1 border-gray-700 rounded-md w-full
                        py-2 px-4 mt-2'>${results?.maxLoss}</div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm mb-2'>Position Size ($)</p>
                        <div className='border-1 border-gray-700 rounded-md w-full
                        py-2 px-4 mt-2'>${results?.positionSize}</div>
                    </div>
                </div>
            </div>
        </div>
        <PositonInputExplanation/>
        <PositionResultExplanation/>
    </div>
  )
}

export default PositionCalculator